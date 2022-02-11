from sqlalchemyseed import load_entities_from_json
from sqlalchemyseed import Seeder
from session import session
import glob

for p in glob.glob('/app/app/db/fixtures/*'):
  if p is not '/app/app/db/fixtures/user' or '/app/app/db/fixtures/user_detail':
    entities = load_entities_from_json(p)
    print(p)
    print(entities)
    print("------------------")
    seeder = Seeder(session)
    seeder.seed(entities)
    seeder.session.commit()

entities = load_entities_from_json('/app/app/db/fixtures/user_detail')
seeder = Seeder(session)
seeder.seed(entities)
seeder.session.commit()

entities = load_entities_from_json('/app/app/db/fixtures/user')
seeder = Seeder(session)
seeder.seed(entities)
seeder.session.commit()