module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ["eslint:recommended", "@typhonjs-fvtt/eslint-config-foundry.js", "plugin:json/recommended", "prettier"],
	globals: {
		arguments: true,
	},
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["jsdoc"],
	rules: {
		"array-bracket-spacing": "error",
		"arrow-body-style": "off",
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": "error",
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		"comma-spacing": "error",
		"comma-style": "error",
		"constructor-super": "error",
		curly: ["error", "multi-line", "consistent"],
		eqeqeq: ["error", "smart"],
		"generator-star-spacing": [
			"error",
			{
				after: false,
				before: true,
			},
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"jsdoc/multiline-blocks": [
			"warn",
			{
				noZeroLineText: false,
			},
		],
		"jsdoc/newline-after-description": "off",
		"jsdoc/require-jsdoc": [
			"warn",
			{
				publicOnly: true,
			},
		],
		"jsdoc/require-param-description": "off",
		"jsdoc/tag-lines": "off",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-class-assign": "error",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-inner-declarations": "off",
		"no-irregular-whitespace": "error",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multiple-empty-lines": "error",
		"no-new-object": "error",
		"no-prototype-builtins": "off",
		"no-regex-spaces": "error",
		"no-spaced-func": "error",
		"no-this-before-super": "error",
		"no-trailing-spaces": "error",
		"no-var": "error",
		"object-curly-spacing": ["error", "always"],
		"object-shorthand": ["error", "properties"],
		"operator-assignment": ["error", "always"],
		"operator-linebreak": [
			"error",
			"after",
			{
				overrides: {
					":": "before",
					"?": "before",
				},
			},
		],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-regex-literals": [
			"error",
			{
				disallowRedundantWrapping: true,
			},
		],
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": ["error", "as-needed"],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		"require-yield": "error",
		semi: ["error", "always"],
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				asyncArrow: "always",
				named: "never",
			},
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error",
			{
				nonwords: false,
				words: true,
			},
		],
		"spaced-comment": [
			"error",
			"always",
			{
				markers: ["/"],
				balanced: true,
			},
		],
		"wrap-regex": "off",
	},
};
