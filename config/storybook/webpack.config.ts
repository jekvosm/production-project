import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import buildCSSLoader from '../build/loaders/buildCSSLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  // @ts-ignore:next-line
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module?.rules?.push(buildCSSLoader(true))

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  )

  return config
}
