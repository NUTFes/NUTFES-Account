from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from ..session import Base

from .sex_model import Sex
from .grade_model import Grade
from .major_model import Major
from .bureau_model import Bureau
from .department_model import Department
from .position_model import Position

class UserDetail(Base):
  __tablename__ = "user_detail"
  id = Column('id', Integer, primary_key=True, unique=True, index=True)
  #user = relationship('User', backref='user', uselist=False)

  sex_id = Column('sex_id', Integer, ForeignKey('sex.id'), primary_key=True)                      # 性別
  sex = relationship(Sex)
  birth = Column('birth', DateTime, default=datetime(1800,1,1,0,0))               # 生年月日
  tel = Column('tel', String, default='-')                              # 電話番号
  grade_id = Column('grade_id', Integer, ForeignKey('grade.id'), primary_key=True)                # 学年
  grade = relationship(Grade)
  major_id = Column('major_id', Integer, ForeignKey('major.id'), primary_key=True)                # 学科
  major = relationship(Major)
  bureau_id = Column('bureau_id', Integer, ForeignKey('bureau.id'), primary_key=True)             # 局
  bureau = relationship(Bureau)
  department_id = Column('department_id', Integer, ForeignKey('department.id'), primary_key=True) # 部門
  department = relationship(Department)
  position_id = Column('position_id', Integer, ForeignKey('position.id'), primary_key=True)       # 役職
  position = relationship(Position)

  updated_at=Column('updated_at', DateTime, server_default=func.now(), nullable=False)
  created_at=Column('created_at', DateTime, server_default=func.now(), nullable=False)