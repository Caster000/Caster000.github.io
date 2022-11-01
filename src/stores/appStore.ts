import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Language} from "../types/Language";

export const useAppStore = defineStore('appStore', () => {

    let activeLanguage = ref('en');
    const TRANSLATIONS = ref(['en','fr']);
    let currentTranslation = ref(new Language());
    async function loadLanguage () {
        console.log("loadLanguage")
        currentTranslation.value =  await import(`../assets/translations/${activeLanguage.value +".json"}`);
    }
    function switchLanguage(language:string)  {
        console.log("switchLanguage")
        activeLanguage.value = TRANSLATIONS.value.includes(language)?language:"en";
        loadLanguage()
    }

    return { activeLanguage,TRANSLATIONS, loadLanguage, currentTranslation,switchLanguage }
})