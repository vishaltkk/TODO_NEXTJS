# TODOAI

https://github.com/vishaltkk/TODO_NEXTJS/assets/122444029/f9c38200-56ed-47f9-94e8-1e9c593c8c50

### Requirements

- Node.js 14+ and npm

### Curl Workings remove the session layer

#### readtodo

Request

```
curl http://localhost:3000/api/todos/readTodo
```

Response 

when present resposne
```

```

when empty todos response
```
{"todos":[]}
```

#### readtodobyid

 curl --location --request GET 'http://127.0.0.1:3000/api/todos/readTodoById?todoId=YOUR_TODO_ID' \ 
--header 'Content-Type: application/json' \
--data '{
    "test":"test"
}'

when present resposne
```

```

when empty todo not found
```
{"error":"Todo not found"}
```

#### create todo

curl -X POST -H "Content-Type: application/json" -d '{
  "name": "New Todo",
  "description": "This is a new todo item.",
  "tag": "TODO"
}' http://localhost:3000/api/createTodo

#### delete todo

curl -X DELETE -H "Content-Type: application/json" \
     -d '{
       "todoId": "TODO_ID"
     }' \
     http://localhost:3000/api/deleteTodo


### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

prisma custom path -

    "seed": "ts-node src/prisma/seed.ts",
    "schema": "src/prisma/schema.prisma"


import fs from 'fs';
import { createRequire } from 'module';

import lodash from 'lodash';

import { plans } from '../src/config/plan';
import { Plan } from '../src/types/Plan';

const require = createRequire(import.meta.url ?? __filename);
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const writeFile = (path: string, data: string) =>
  new Promise<void>((resolve, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) reject(err);
      resolve();
    })
  );

async function main() {
  const currentRunningplans = await prisma.plan.findMany();

  const checkIfNoExistingPLanWasDeleted = currentRunningplans.filter(
    (o1: { name: any }) => {
      return (
        lodash.findIndex(plans, {
          name: o1.name,
        }) === -1
      );
    }
  );

  if (checkIfNoExistingPLanWasDeleted.length)
    throw new Error('Deletion of Object is not allowed');

  const newPlans = plans.filter((o1) => {
    return (
      lodash.findIndex(currentRunningplans, {
        name: o1.name,
      }) === -1
    );
  });
  await prisma.plan.createMany({ data: newPlans });

  const updatePlans: Plan[] = [];
  plans.forEach((plan) => {
    currentRunningplans.forEach(
      (runningPlan: { name: string; plan_status: boolean }) => {
        if (
          runningPlan.name === plan.name &&
          runningPlan.plan_status !== plan.plan_status
        ) {
          updatePlans.push(plan);
        }
      }
    );
  });

  updatePlans.forEach(async (plan: { name: any }) => {
    await prisma.plan.update({
      where: {
        name: plan.name,
      },
      data: plan,
    });
  });

  const plansFromDb = await prisma.plan.findMany();

  await writeFile('./../src/config/plan.json', JSON.stringify(plansFromDb));
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


    "seed": "cd prisma && DATABASE_URL=$(grep DATABASE_URL .env | cut -d '=' -f2) npm run seed",


Navbar 


                    <div className={styles.div_71907878777}>
                      <div className={styles.div_73683265526}>
                        <h1 className={styles.h1_65667333178}>
                          <img
                            alt="logTodoLogotext"
                            src="/images/logTodoLogotext.png"
                            className={styles.img_48113173873}
                          ></img>{' '}
                        </h1>
                        <div className={styles.div_86758063485}>
                          <a className={styles.a_93597594673}>
                            Request a demo{' '}
                          </a>
                          <a className={styles.a_69010943852}>Jobs </a>
                          <a className={styles.a_32885897673}>Login </a>
                          <button
                            type="submit"
                            className={styles.button_92013957928}
                          >
                            Get Started{' '}
                          </button>{' '}
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}


