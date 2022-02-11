from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from ..session import Base

class Sex(Base):
    __tablename__ = "sex"
    id = Column('id', Integer, primary_key=True, unique=True, index=True, autoincrement=True)
    #user_detail = relationship('UserDetail', backref='user_detail', uselist=True)
    name = Column('name', String(255))