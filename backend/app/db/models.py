from sqlalchemy import Boolean, Column, Integer, String, DateTime
from datetime import datetime

from .session import Base


class User(Base):
    __tablename__ = "user"

    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    number = Column('number', Integer, unique=True, index=True, nullable=False)
    email = Column('email', String, unique=True, index=True, nullable=False)
    first_name = Column('first_name', String)
    last_name = Column('last_name', String)
    first_name_kana = Column('first_name_kana', String)
    last_name_kana = Column('last_name_kana', String)
    hashed_password = Column('hashed_password', String, nullable=False)
    sex = Column('sex', String)                   # 性別
    birth = Column('birth', String)               # 生年月日
    tel = Column('tel', String)                   # 電話番号
    grade = Column('grade', String)               # 学年
    major = Column('major', String)               # 学科
    bureau = Column('bureau', String)             # 局
    department = Column('department', String)     # 部門
    position = Column('position', String)         # 役職

    permission=Column('permission', String)     # 権限

    is_active = Column('is_active', Boolean, default=True)
    is_superuser = Column('is_superuser', Boolean, default=False)

    updated_at=Column('updated_at', DateTime, default=datetime.now(), nullable=False)
    created_at=Column('created_at', DateTime, default=datetime.now(), nullable=False)