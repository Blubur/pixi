document.querySelectorAll('iframe').forEach(function(frame) {
    let html = frame.srcdoc || '';
    let src = frame.src || '';

    if (
        src.includes('adstune.com') ||
        html.includes('adstune.com') ||
        src.includes('728x90') ||
        html.includes('728x90')
    ) {
        frame.closest('div')?.remove();
    }
});
