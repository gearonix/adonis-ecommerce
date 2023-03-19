import {DefinePlugin} from 'webpack';

export default ({ config }) => {

    config.plugins.push(new DefinePlugin({
        __IS_STORYBOOK__: JSON.stringify('true'),
    }));

    return config;
};
