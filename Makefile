install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
fix:
	npx eslint --fix .
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progres:
	node bin/brain-progression.js