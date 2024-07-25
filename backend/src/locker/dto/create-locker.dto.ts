import { GroupLocker } from "src/group_locker/entities/group_locker.entity";

export class CreateLockerDto {
    state: number;
    position: string;
    is_open: boolean;
    is_delete: boolean;
    groupLockerId: GroupLocker
}
