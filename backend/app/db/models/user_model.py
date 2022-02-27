from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime, timedelta, timezone
JST = timezone(timedelta(hours=+9), 'JST')
from ..session import Base

class User(Base):
    __tablename__ = "user"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, nullable=False)

    number = Column('number', Integer, unique=True, index=True)
    email = Column('email', String(255), unique=True, index=True)
    first_name = Column('first_name', String(255))
    last_name = Column('last_name', String(255))
    first_name_kana = Column('first_name_kana', String(255))
    last_name_kana = Column('last_name_kana', String(255))
    hashed_password = Column('hashed_password', String(255))

    type_id = Column('type_id', ForeignKey('type.id'), default=0)
    type = relationship('Type')
    permission_id = Column('permission_id', ForeignKey('permission.id'), default=0)
    permission = relationship('Permission')
    user_detail_id = Column('user_detail_id', ForeignKey('user_detail.id'), default=0)
    user_detail = relationship('UserDetail')

    is_active = Column('is_active', Boolean, default=True)
    is_superuser = Column('is_superuser', Boolean, default=False)

    updated_at=Column('updated_at', DateTime, server_default=func.now(), default=datetime.now(JST), nullable=False)
    created_at=Column('created_at', DateTime, server_default=func.now(), default=datetime.now(JST), nullable=False)