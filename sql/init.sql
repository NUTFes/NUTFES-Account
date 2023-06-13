-- keycloakが作成したテーブルを修正
ALTER INDEX "UK_J3RWUVD56ONTGSUHOGM184WW2-2" RENAME TO "UK_J3RWUVD56ONTGSUHOGM184WW2_2";
ALTER INDEX "CONSTRAINT_17-2" RENAME TO "CONSTRAINT_17_2";

-- user_group_membershipにkeycloak_groupへのリレーションを追加
ALTER TABLE ONLY public.user_group_membership
  ADD CONSTRAINT user_group_membership_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.keycloak_group(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

-- breauテーブルの作成とkeycloak_groupテーブルへのリレーション
CREATE TABLE bureau (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  group_id VARCHAR(255) REFERENCES "keycloak_group" (id)
);
INSERT INTO bureau (name, group_id) SELECT name, id FROM keycloak_group WHERE name IN ('執行部', '総務局', '渉外局', '企画局', '制作局', '財務局', '情報局');

-- departmentテーブルの作成とkeycloak_groupテーブルへのリレーション
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  group_id VARCHAR(255) REFERENCES "keycloak_group" (id)
);
INSERT INTO department (name, group_id) SELECT name, id FROM keycloak_group WHERE name IN ('機械創造工学分野', '電気電子情報工学分野', '環境社会基盤工学分野', '物質生物機能工学分野', '情報・経営システム工学分野', '量子・原子力システム安全工学分野', 'エネルギー工学分野', '材料工学分野', '情報・制御工学分野', '社会環境・生物機能工学分野', '技術科学イノベーション専攻');

-- gradeテーブルの作成とkeycloak_groupテーブルへのリレーション
CREATE TABLE grade (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  group_id VARCHAR(255) REFERENCES "keycloak_group" (id)
);
INSERT INTO grade (name, group_id) SELECT name, id FROM keycloak_group WHERE name IN ('B1[学部1年]', 'B2[学部2年]', 'B3[学部3年]', 'B4[学部4年]', 'M1[修士1年]', 'M2[修士2年]', 'D1[博士1年]', 'D2[博士2年]', 'D3[博士3年]', 'GD1[イノベ1年]', 'GD2[イノベ2年]', 'GD3[イノベ3年]', 'GD4[イノベ4年]', 'GD5[イノベ5年]');
