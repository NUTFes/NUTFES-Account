#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user
from app.db.schemas import UserCreate
from sqlalchemy.orm import Session
from app.db.session import SessionLocal


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
    
    user.type_id=0,
    user.permission_id=0,
    user.user_detail_id=0,

    create_user(db,user)


if __name__ == "__main__":
    print("Creating superuser admin@admin.com")
    init()
    print("Superuser created")
