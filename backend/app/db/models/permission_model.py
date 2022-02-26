from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from ..session import Base

class Permission(Base):
  __tablename__ = "permission"
  id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
  users = relationship('User', back_populates='user', uselist=True)
  name = Column('name', String(255))