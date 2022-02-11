from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import now 
from datetime import datetime
from ..session import Base

class UserDetail(Base):
  __tablename__ = "user_detail"
  id = Column('id', Integer, primary_key=True, unique=True, index=True)
  #user = relationship('User', backref='user', uselist=False)

  sex_id = Column('sex_id', ForeignKey('sex.id'), default=0)                      # 性別
  birth = Column('birth', DateTime, default=datetime(1800,1,1,0,0))               # 生年月日
  tel = Column('tel', String(255), default='-')                              # 電話番号
  grade_id = Column('grade_id', ForeignKey('grade.id'), default=0)                # 学年
  major_id = Column('major_id', ForeignKey('major.id'), default=0)                # 学科
  bureau_id = Column('bureau_id', ForeignKey('bureau.id'), default=0)             # 局
  department_id = Column('department_id', ForeignKey('department.id'), default=0) # 部門
  position_id = Column('position_id', ForeignKey('position.id'), default=0)       # 役職

  updated_at=Column('updated_at', DateTime, server_default=func.now(), nullable=False)
  created_at=Column('created_at', DateTime, server_default=func.now(), nullable=False)