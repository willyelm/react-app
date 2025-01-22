const aliasPlugin = (aliases) => ({
  name: 'alias',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      if (aliases[args.path]) {
        // Resolve the alias to an absolute path
        // path.resolve(aliases[args.path])
        return {
          path: aliases[args.path],
          external: true
        };
      }
      return null;
    });
  },
});

export default aliasPlugin;