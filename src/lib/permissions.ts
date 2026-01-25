import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

export const statement = {
    project: ["create", "share", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

export const user = ac.newRole({
    project: ["create"],
});

export const admin = ac.newRole({
    project: ["create", "update", "delete", "share"],
    ...adminAc.statements,
});

    