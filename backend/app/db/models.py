from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from .session import Base


class User(Base):
    __tablename__ = "user"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True, nullable=False)

    number = Column('number', Integer, unique=True, index=True)
    email = Column('email', String, unique=True, index=True)
    first_name = Column('first_name', String)
    last_name = Column('last_name', String)
    first_name_kana = Column('first_name_kana', String)
    last_name_kana = Column('last_name_kana', String)
    hashed_password = Column('hashed_password', String)

    type_id = Column('type_id', ForeignKey('type.id'), default=0)
    permission_id = Column('permission_id', ForeignKey('permission.id'), default=0)
    user_detail_id = Column('user_detail_id', ForeignKey('user_detail.id'), default=0)

    is_active = Column('is_active', Boolean, default=True)
    is_superuser = Column('is_superuser', Boolean, default=False)

    updated_at=Column('updated_at', DateTime, server_default=func.now(), nullable=False)
    created_at=Column('created_at', DateTime, server_default=func.now(), nullable=False)


class Type(Base):
    __tablename__ = "type"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user = relationship('User', backref='user', uselist=True)
    name = Column('name', String)


class Permission(Base):
    __tablename__ = "permission"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user = relationship('User', backref='user', uselist=True)
    name = Column('name', String)


class UserDetail(Base):
    __tablename__ = "user_detail"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user = relationship('User', backref='user', uselist=False)

    sex_id = Column('sex_id', ForeignKey('sex.id'), default=0)                      # 性別
    birth = Column('birth', DateTime, default=datetime(1800,1,1,0,0))               # 生年月日
    tel = Column('tel', String, default='-')                              # 電話番号
    grade_id = Column('grade_id', ForeignKey('grade.id'), default=0)                # 学年
    major_id = Column('major_id', ForeignKey('major.id'), default=0)                # 学科
    bureau_id = Column('bureau_id', ForeignKey('bureau.id'), default=0)             # 局
    department_id = Column('department_id', ForeignKey('department.id'), default=0) # 部門
    position_id = Column('position_id', ForeignKey('position.id'), default=0)       # 役職

    updated_at=Column('updated_at', DateTime, server_default=func.now(), nullable=False)
    created_at=Column('created_at', DateTime, server_default=func.now(), nullable=False)

class Sex(Base):
    __tablename__ = "sex"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('UserDetail', backref='user_detail', uselist=True)
    name = Column('name', String)

class Grade(Base):
    __tablename__ = "grade"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('Grade', backref='grade', uselist=True)
    name = Column('name', String)

class Major(Base):
    __tablename__ = "major"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('Major', backref='major', uselist=True)
    name = Column('name', String)

class Bureau(Base):
    __tablename__ = "bureau"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('Bureau', backref='bureau', uselist=True)
    name = Column('name', String)

class Department(Base):
    __tablename__ = "department"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('Department', backref='department', uselist=True)
    name = Column('name', String)

class Position(Base):
    __tablename__ = "position"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    user_detail = relationship('Position', backref='position', uselist=True)
    name = Column('name', String)