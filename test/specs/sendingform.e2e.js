describe('Testing the function FORMS in Webdriver.IO', () => {
    it('Must complete and submit the form correctly', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('Texto texto')
        await $('~input-text-result').getText('Texto texto') 
        await $('~switch').click()
        await $('android.widget.EditText').click()
        await $('android.view.ViewGroup').click()
        await $('android.widget.Button').click()
    });
});