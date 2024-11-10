import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingStore = defineStore('user', () => { // 使用具名导出
    const theme = ref('light');  // 初始化主题为 "light"
    const themeName = ref('亮色模式');
    // 切换主题的方法
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        themeName.value = theme.value === 'light' ? '亮色模式' : '暗黑模式';
    };
    const tabbarDisplay = ref(true);
    const toggleTabbarDisplay = () => {
        tabbarDisplay.value = true;
    };
    const toggleTabbarHidden = () => {
        tabbarDisplay.value = false;
    };

    return {
        theme,
        themeName,
        tabbarDisplay,
        toggleTabbarDisplay,
        toggleTabbarHidden,
        toggleTheme,  // 暴露切换主题方法
    };
});
