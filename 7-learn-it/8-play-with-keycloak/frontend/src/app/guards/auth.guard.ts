import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';

const isAccessAllowed = async (
  route: any,
  _: any,
  authData: AuthGuardData,
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles } = authData;

  if (!authenticated) {
    return false;
  }

  const requiredRole = route.data?.['role'] as string | undefined;
  if (!requiredRole) {
    return true;
  }

  return grantedRoles.realmRoles.includes(requiredRole);
};

export const authGuard = createAuthGuard<CanActivateFn>(isAccessAllowed);
