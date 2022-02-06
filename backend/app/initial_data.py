#!/usr/bin/env python3

from backend.app.db.crud import *
from backend.app.db.schemas import *
from app.db.session import SessionLocal
from datetime import datetime


def init() -> None:
    db = SessionLocal()

    sex = SexCreate
    sex.name = '男'
    create_sex(db,sex)

    grade = GradeCreate
    grade.name = 'b'
    create_grade(db,grade)

    major = MajorCreate
    major.name = 'b'
    create_major(db,major)

    breau = BureauCreate
    breau.name = 'b'
    create_bureau(db,breau)

    department = DepartmentCreate
    department.name = 'b'
    create_department(db,department)

    position = PositionCreate
    position.name = 'b'
    create_position(db,position)

    user_detail = UserDetailCreate
    user_detail.sex_id = 1
    user_detail.birth = datetime(1999,7,29)
    user_detail.tel = '000-0000-0000'
    user_detail.grade_id = 1
    user_detail.major_id = 1
    user_detail.bureau_id = 1
    user_detail.department_id = 1
    user_detail.position_id = 1
    create_user_detail(db,user_detail)

    type = TypeCreate
    type.name = 'b'
    create_type(db,type)

    permission = PermissionCreate
    permission.name = 'b'
    create_permission(db,permission)

    user = UserCreate
    user.email="admin@admin.com"
    user.password="password"
    user.is_active=True
    user.is_superuser=True
    user.number=10000000
    user.first_name="太郎"
    user.last_name="田中"
    user.first_name_kana="たろう"
    user.last_name_kana="たなか"
    user.type_id=1
    user.permission_id=1
    user.user_detail_id=1
    create_user(db,user)


if __name__ == "__main__":
    print("Creating superuser admin@admin.com")
    init()
    print("Superuser created")
