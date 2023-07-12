describe('Testing the function FORMS in Webdriver.IO', () => {
    it('Must complete the form correctly', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('Texto texto')
        await $('~input-text-result').getText('Texto texto') 
        await $('~switch').click()
        await $('android.widget.TextView').click()
        await $('android.widget.CheckedTextView[3]').click()
        await $('android.view.ViewGroup').click()
        await $('id=android:id/button1').click()        
    });
});

