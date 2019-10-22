module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: ['.js', '.vue', '.json', '.css'],  // 添后缀
            alias: {
                // 起别名，如：'@': 'src'，router不需要别名（抛出，main.js导入就行了）
                // '@': resolve('src'),   // 默认，@指向src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}