import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { AppRouteObject } from "../../routes";

export type PolicyDetailsParams = {
  realm: string;
  id: string;
  policyId: string;
  policyType: string;
};

const PolicyDetails = lazy(
  () => import("../authorization/policy/PolicyDetails")
);

export const PolicyDetailsRoute: AppRouteObject = {
  path: "/:realm/clients/:id/authorization/policy/:policyId/:policyType",
  element: <PolicyDetails />,
  breadcrumb: (t) => t("clients:createPolicy"),
  handle: {
    access: "view-clients",
  },
};

export const toPolicyDetails = (
  params: PolicyDetailsParams
): Partial<Path> => ({
  pathname: generatePath(PolicyDetailsRoute.path, params),
});
