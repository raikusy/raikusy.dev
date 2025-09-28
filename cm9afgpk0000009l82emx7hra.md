---
title: "Building Type-Safe API Clients with the Procedure Pattern"
datePublished: Wed Apr 09 2025 21:14:46 GMT+0000 (Coordinated Universal Time)
cuid: cm9afgpk0000009l82emx7hra
slug: building-type-safe-api-clients-with-the-procedure-pattern
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1744232261545/dac268f6-1455-4858-9bc6-15f3f9ab87d9.png
tags: typescript, frontend-development, nextjs, react-query, zod

---

The procedure pattern provides a type-safe, declarative approach to building API clients in TypeScript applications. This pattern simplifies API calls while ensuring type safety throughout your application.

## Core Concepts

1. **Procedures** - Base objects that define the API context and middleware chain
    
2. **Endpoints** - Type-safe functions created from procedures for specific API operations
    
3. **Middleware** - Functions that modify the request context before execution
    

## Architecture Diagram

![Architecture Diagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1744233114329/64095587-028d-40b3-8c0a-d915ba3a9357.png)

## Request Flow Sequence

![Request Flow Sequence](https://cdn.hashnode.com/res/hashnode/image/upload/v1744233089785/7ed5d1e9-dbc9-4844-950b-97c8b2dd5e96.png)

## Implementation

### 1\. Create the Base Procedure Utility

First, create a utility for building procedures:

```typescript
// lib/utils/create-procedure.ts
import { z, type ZodSchema } from 'zod';

// Base context for requests
export interface BaseContext {
  headers?: Record<string, string>;
  formData?: boolean;
}

// Options for creating a procedure
export interface ProcedureOptions {
  apiBase: string;
}

// Create a procedure with middleware support
export function createProcedure<TContext extends BaseContext = BaseContext>(
  options: ProcedureOptions
): BaseProcedure<TContext> {
  // Implementation omitted for brevity
  // See full implementation in github
}
```

👉 [Full code](https://github.com/raikusy/nextjs-procedure-boilerplate/blob/main/src/lib/utils/create-procedure.ts)

### 2\. Define Client Procedures

Set up both public and authenticated procedures:

```typescript
// lib/api/client-procedures.ts
import { env } from '@/env/client';
import { getAccessToken } from '../utils/client-cookies';
import { createProcedure, type BaseContext } from '../utils/create-procedure';

// Public procedure - no authentication
export const clientPublicProcedure = createProcedure({
  apiBase: env.NEXT_PUBLIC_API_URL,
});

// Auth context type
export interface AuthContext extends BaseContext {
  headers: {
    Authorization: string;
  };
}

// Auth middleware
export const authMiddleware = (ctx: BaseContext): AuthContext => {
  const token = getAccessToken();

  if (!token) {
    throw new Error('Authentication required');
  }

  return {
    ...ctx,
    headers: {
      ...ctx.headers,
      Authorization: `Bearer ${token}`,
    },
  };
};

// Private procedure - requires authentication
export const clientPrivateProcedure = clientPublicProcedure.use(authMiddleware);
```

### 3\. Define Server Procedures

For server-side API calls:

```typescript
// lib/api/server-procedures.ts
import 'server-only';
import { env } from '@/env/server';
import { createProcedure } from '../utils/create-procedure';
import { serverAuthMiddleware } from './server-auth-middleware';

// Public server procedure
export const serverPublicProcedure = createProcedure({
  apiBase: env.API_URL,
});

// Private server procedure
export const serverPrivateProcedure = serverPublicProcedure.use(serverAuthMiddleware);
```

### 4\. Define Domain Types

Create type definitions for your domain models:

```typescript
// lib/api/roles/role-types.ts
import type { BaseResponse, PaginatedResponse } from '../types';

export interface Role {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  permissions: RolePermission;
  created_at: string;
  updated_at: string;
}

export interface RolePermission {
  [key: string]: string;
}

export type RoleListResponse = BaseResponse<
  PaginatedResponse & {
    roles: Role[];
  }
>;
export type RoleResponse = BaseResponse<Role>;
```

### 5\. Implement API Modules

Create domain-specific API modules:

```typescript
// lib/api/roles/role-api.ts
import { z } from 'zod';
import { clientPrivateProcedure, type AuthContext } from '../client-procedures';
import { API_ENDPOINTS } from '@/config/api';
import type { RoleListResponse, RoleResponse } from './role-types';
import { getByIdSchema } from '../schemas';
import type { BaseProcedure } from '../../utils/create-procedure';

// Validation Schemas
const createRoleSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  permissions: z.array(z.string()),
  is_active: z.boolean().default(false),
});
export type CreateRoleParams = z.infer<typeof createRoleSchema>;

const updateRoleSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  permissions: z.array(z.string()),
  is_active: z.boolean().default(false),
});
export type UpdateRoleParams = z.infer<typeof updateRoleSchema>;

export const getRolesParamsSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).default(10),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
});
export type GetRolesParams = z.infer<typeof getRolesParamsSchema>;

// Factory function for creating role API with any procedure
export function getRoleApi(procedure: BaseProcedure<AuthContext>) {
  return {
    list: procedure.input(getRolesParamsSchema).get<RoleListResponse>(API_ENDPOINTS.roles),
    create: procedure.input(createRoleSchema).post<RoleResponse>(API_ENDPOINTS.roles),
    update: procedure.input(updateRoleSchema).put<RoleResponse>(`${API_ENDPOINTS.roles}/:id`),
    delete: procedure.input(getByIdSchema).delete<RoleResponse>(`${API_ENDPOINTS.roles}/:id`),
    getById: procedure.input(getByIdSchema).get<RoleResponse>(`${API_ENDPOINTS.roles}/:id`),
  };
}

// Default client-side API using client private procedure
export const roleApi = getRoleApi(clientPrivateProcedure);
```

### 6\. Create React Query Hooks

Create React hooks for client-side data fetching:

```typescript
// lib/api/roles/role-hooks.ts
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from '@tanstack/react-query';
import { roleApi, type CreateRoleParams, type UpdateRoleParams, type GetRolesParams } from './role-api';
import type { RoleListResponse, RoleResponse } from './role-types';
import { isErrorResponse, type ErrorResponse } from '../../utils/create-procedure';

export const useGetRoles = (
  params?: GetRolesParams,
  options?: Omit<UseQueryOptions<RoleListResponse, ErrorResponse>, 'queryFn' | 'queryKey'>
) => {
  return useSuspenseQuery({
    queryKey: ['roles', params],
    queryFn: async () => {
      const result = await roleApi.list(params);
      if (isErrorResponse(result)) {
        throw new Error(result.error);
      }
      return result.data;
    },
    ...options,
  });
};

export const useCreateRole = (
  options?: Omit<UseMutationOptions<RoleResponse, ErrorResponse, CreateRoleParams>, 'mutationFn'>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateRoleParams) => {
      const result = await roleApi.create(input);
      if (isErrorResponse(result)) {
        throw new Error(result.error);
      }
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      return result.data;
    },
    ...options,
  });
};

// Additional hooks for update, delete, etc.
```

### 7\. Usage in Components

```tsx
// app/(dashboard)/users/roles/page.tsx
import { Suspense } from 'react';
import { useGetRoles } from '@/lib/api/roles/role-hooks';

function RolesList() {
  const { data } = useGetRoles();

  return (
    <div>
      <h1>Roles</h1>
      <ul>
        {data.roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RolesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RolesList />
    </Suspense>
  );
}
```

## Benefits

1. **Type Safety**: Full type inference from API definitions to UI components
    
2. **Code Organization**: Modular API modules with consistent patterns
    
3. **Middleware Support**: Easy addition of authentication, logging, or error handling
    
4. **Reusability**: Server and client can share type definitions and API structures
    
5. **Validation**: Input validation with Zod ensures data integrity
    

The procedure pattern provides a clean architecture for your API layer while maintaining type safety throughout your Next.js application.

## Example Github

[https://github.com/raikusy/nextjs-procedure-boilerplate](https://github.com/raikusy/nextjs-procedure-boilerplate)