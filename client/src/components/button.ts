export const button = (text: string, idValue: string, onOff?: string) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.setAttribute('id', `${idValue}`);
    if (onOff) btn.setAttribute(onOff, '');
    btn.textContent = text;
    return btn;
}