from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from ..session import Base

class Type(Base):
  __tablename__ = "type"
  id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
  #user = relationship('User', backref='user', uselist=True)
  name = Column('name', String)