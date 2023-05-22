  

  module.exports = {
    // ...các cấu hình khác của webpack...
  
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        // ...các rule khác nếu cần...
      ],
    },
  
    // ...các cấu hình khác của webpack...
  };
  