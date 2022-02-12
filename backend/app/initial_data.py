#!/usr/bin/env python3

from app.db.crud.user_detail_crud import *
from app.db.schemas.user_detail_schema import *
from app.db.crud.user_crud import *
from app.db.schemas.user_schema import *
from app.db.session import SessionLocal
from datetime import datetime


def init() -> None:
    db = SessionLocal()

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
