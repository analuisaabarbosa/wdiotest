describe('Testing the function FORMS in Webdriver.IO', () => {
    it('Must complete the form correctly', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('Texto texto')
        await $('~input-text-result').getText('Texto texto') 
        await $('~switch').click()
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText').click()
        await $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]').click()
        await $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup').click()
        await $('id=android:id/button1').click()        
    });
});