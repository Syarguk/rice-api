export const input = (id: string, onOff?: string) => {
    const inp = document.createElement('input');
    inp.classList.add('input');
    inp.setAttribute('id', id);
    if (onOff) inp.setAttribute(onOff, '');
    return inp;
}

export const inputColor = (id: string, onOff?: string) => {
    const inp = document.createElement('input');
    inp.classList.add('input-color');
    inp.setAttribute('id', id);
    inp.setAttribute('type', 'color');
    inp.setAttribute('value', '#ff0000');
    if (onOff) inp.setAttribute(onOff, '');
    return inp;
}