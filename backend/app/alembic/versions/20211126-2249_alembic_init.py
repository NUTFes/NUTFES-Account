"""alembic init

Revision ID: 90f58740d955
Revises: 
Create Date: 2021-11-26 22:49:13.937500-08:00

"""
from alembic import op
import sqlalchemy as sa
from datetime import datetime

# revision identifiers, used by Alembic.
revision = '90f58740d955'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table(
        'user',
        sa.Column('id', sa.Integer, primary_key=True, unique=True, index=True, autoincrement=True),
        sa.Column('number', sa.Integer, unique=True, index=True, nullable=False),
        sa.Column('email', sa.String, unique=True, index=True, nullable=False),
        sa.Column('first_name', sa.String),
        sa.Column('last_name', sa.String),
        sa.Column('first_name_kana', sa.String),
        sa.Column('last_name_kana', sa.String),
        sa.Column('hashed_password', sa.String, nullable=False),
        sa.Column('sex', sa.String),                   # 性別
        sa.Column('birth', sa.String),               # 生年月日
        sa.Column('tel', sa.String),                   # 電話番号
        sa.Column('grade', sa.String),               # 学年
        sa.Column('major', sa.String),               # 学科
        sa.Column('bureau', sa.String),             # 局
        sa.Column('department', sa.String),     # 部門
        sa.Column('position', sa.String),         # 役職

        sa.Column('permission', sa.String),     # 権限

        sa.Column('is_active', sa.Boolean, default=True),
        sa.Column('is_superuser', sa.Boolean, default=False),

        sa.Column('updated_at', sa.DateTime, default=datetime.now(), nullable=False),
        sa.Column('created_at', sa.DateTime, default=datetime.now(), nullable=False),
    )


def downgrade():
    op.drop_table('user')