module.exports = {
    // for working in firefox 53
    transpileDependencies: ['vue-chart-3', 'chart.js'],
    css: {
        loaderOptions: {
            sass: {
                prependData: `
								@import "~@/assets/scss/vars/style/colors.scss";
                @import "~@/assets/scss/vars/style/spacing.scss";
                @import "~@/assets/scss/vars/style/shadows.scss";
                @import "~@/assets/scss/vars/style/typography.scss";
                @import "~@/assets/scss/mixins";
                @import "~@/assets/scss/default-override.scss";`,
            },
        },
    },
};
