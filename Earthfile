VERSION 0.8
FROM node:20.7.0
WORKDIR /app

deps:
    ENV NODE_OPTIONS="--max_old_space_size=5120"
    COPY .yarnrc.yml package.json yarn.lock .
    #TODO: Copy specific manifest files rather than entire directories
    COPY packages/ ./packages
    COPY shared/ ./shared
    COPY scripts/ ./scripts
    COPY functions/ ./functions
    COPY .yarn/ .yarn/
    RUN yarn install --immutable
    RUN yarn install --immutable --immutable-cache

setupProject: 
    FROM +deps
    COPY src ./src
    COPY .eslintignore .
    COPY .eslintrc.json .

lint:
    FROM +setupProject
    COPY .prettierrc .
    COPY .prettierignore .
    RUN ls -a
    RUN cat .eslintignore
    RUN yarn lint
    RUN yarn workspace oa-components lint

build:
    FROM +setupProject
    COPY tsconfig.json .
    COPY .env-cmdrc.js .
    COPY craco.config.ts .
    ENV REACT_APP_BRANCH='branch'
    ENV REACT_APP_PROJECT_VERSION='0.0.0'
    COPY public ./public
    RUN yarn build

