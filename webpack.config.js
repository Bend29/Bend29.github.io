const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssSVG = require("postcss-svg");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const PostCSSAssetsPlugin = require("postcss-assets-webpack-plugin");
const UnCSSPlugin = require('uncss-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/pages");

module.exports = {
  entry: ["./src/js/index.js", "./src/style/main.scss"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./js/[name].js",
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/components"),
        use: {
          loader: "raw-loader",
          options: {},
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2|woff|truetype)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/img"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              modules: false,
              spriteFilename: "icons.svg",
              outputPath: "img/",
              runtimeCompat: true,
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"], postcssSVG],
                minimize: true,
              },
              sourceMap: false,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              debug: true,
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
            },
          },
        ],
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'img-loader',
        enforce: 'pre',
        options: {
          plugins: [
            imageminMozjpeg({
              progressive: true,
              arithmetic: false,
              quality:65,
            }),
            imageminPngquant({
              floyd: 0.5,
              speed: 2
            }),
          ]
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SpriteLoaderPlugin(),
    // new ImageminWebpWebpackPlugin(
    //   {
    //     plugins: [
    //       imageminMozjpeg({
    //         progressive: true,
    //         arithmetic: false,
    //         quality:65,
    //       }),
    //       imageminPngquant({
    //         floyd: 0.5,
    //         speed: 2
    //       }),
    //     ]
    //   }
    // ),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['jpegtran', { progressive: true, arithmetic: false,quality:95 }],
          ['optipng', { optimizationLevel: 6,interlaced:null }],
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./style/main.css",
      minimize: true,
    }),
    ...htmlPlugins,

    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, "src/img/picture"), to: path.join(__dirname, "dist/img/picture") },
        { from: path.join(__dirname, "src/fonts"), to: path.join(__dirname, "dist/fonts") },
        { from: path.join(__dirname, "src/json"), to: path.join(__dirname, "dist/json") },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9090,
    inline: true,
    watchOptions: {
      aggregateTimeout: 100,
    },
  },
};

