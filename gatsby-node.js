"use strict";

exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        case 'develop':
			config.loader(`sass`, {
	          loaders: ['sass-bulk-import']
	        });

            break;

        case 'build-css':
			config.loader(`sass`, {
			  loaders: ['sass-bulk-import']
			});

            break;

    }

    return config;
};
