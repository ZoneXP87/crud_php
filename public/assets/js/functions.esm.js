/**
 * Maximum amount of recursive loops allowed.
 */
const maxRecursivityDepth = 5;

/**
 * Header selector for header. You can edit this selector to get the header or the size to add on scroll or to view if is within viewport.
 */
const headerSelector = '#header, .header, header';

/**
 * Gets the size of the actual window.
 * @returns The actual size of theinner window.
 */
 export const windowSize = () => window.innerWidth;

 /**
 * Reloads the page.
 */
 export const toReload = () => location.reload();

/**
 * Allowed keys on keyboard Event inside an input.
 */
export const allowedKeys = [
    'Control',
    'Alt',
    'Shift',
    'Backspace',
    'Delete',
    'Insert',
    'End',
    'Home',
    'PageUp',
    'PageDown',
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'ArrowLeft',
    'Tab'
];

/**
 * Regular expressions JSON type variable for fields.
 */
export const regExp = {
    username: new RegExp(/^[\|\[\]\{\}\+\(\)\*\+\~\^\@\-\/\&\%\=a-zA-ZáéíóúÁÉÍÓÚÑñ\-\s\_\.0-9]*$/, 'g'),
    password: new RegExp(/[\|\[\]\{\}\+\(\)\&\%\=a-zA-ZáéíóúÁÉÍÓÚÑñ\-\s\d\_\.\*\+\~\^\@\-\/\$]/, 'g'),
    boolean: new RegExp(/^[0-1]*$/, 'g'),
    email: new RegExp(/^[a-zA-Z\d\-\_\.@a-zA-Za-zA-Z]+$/, 'g'),
    phoneNumber: new RegExp(/^[\-\d\.]*$/, 'g'),
    numeric: new RegExp(/^[\d]*$/, 'g'),
    float: new RegExp(/^[\d]*([.]+[\d]*)?$/, 'g'),
    text: new RegExp(/^[[a-zA-Z][\(\)a-zA-ZáéíóúÁÉÍÓÚÑñ\-\s\d\_\.\,\¿\?\¡\!\#]*$/, 'g'),
    personName: new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚÑñ\-\s\.]*$/, 'g'),
    productName: new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚÑñ\-\s\.\d]+$/, 'g'),
    alpha: new RegExp(/^[a-zA-Z\d\-]*$/, 'g'),
    alphaNoDashes: new RegExp(/^[a-zA-Z\d]*$/, 'g')
};

/**
 * Still don't know what is does.
 * @param {} element
 * @param {*} firstPart
 * @returns
 */
export const usernameParts = (element, firstPart = false) => {
    const arrayValue = element.value.trim().split(' ').splice(0, 2);
    return slugify(arrayValue.map((nameItem, index) => {
        let value = nameItem;
        if (firstPart && index == 0 && arrayValue.length > 1) {
            value = nameItem.charAt(0);
        }
        if (!firstPart && index > 0 && arrayValue.length > 1) {
            value = nameItem.charAt(0);
        }
        return value;
    }).join(''));
};

/**
 * Input validator.
 * @param {string} value A string to test if acomplishes the required regexp.
 * @param {string} regexp Index that must be part of the regExp variable set above this same file.
 * @param {number} min Sets the minimum length of the string [value] passed as param.
 * @param {number} max Sets the maximum length of the string [value] passed as param.
 * @returns JSON object that says if passed and if not passed says what argument didn't aprove.
 */
export const inputValidator = (value, regexp = '', min = 0, max = 0) => {
    if (min > max && max > 0) {
        return {
            valid: false
        };
    }
    max = min == max ? 0 : max;
    const validation = {
        minLength: true,
        min,
        maxLength: true,
        max,
        regexp: true,
        valid: true
    };
    validation.minLength = min >= 0;
    validation.minLength = validation.minLength && value.length >= min;

    validation.maxLength = max > 0;
    validation.maxLength = (validation.maxLength && value.length <= max) || max == 0;

    regexp = regExp[regexp] || false;
    validation.regexp = regexp && value.match(regexp) != null;

    validation.valid = validation.minLength && validation.maxLength && validation.regexp && value.length > 0;

    return regexp ? validation : false;
};

/**
 * Function that strips all non 'url-safe' characters.
 * @param {string} value String that is passed to strip down.
 * @returns 'url-safe' string.
 */
export const slugify = (value) => {
    if (value !== undefined && value !== null) {
      value = value.replace(/^\s+|\s+$/g, '-');
      value = value.toLowerCase();
      const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
      const to   = 'aaaaaeeeeiiiioooouuuunc------';
      for (let i = 0, l = from.length ; i < l ; i++) {
          value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }
      value = value.replace(/[^a-z0-9\-\s]/g, '-')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
    }
    return value;
};

/**
 * Easy on scroll event listener
 * @param {Callback} listener The callback function to trigger when the document is scroled.
 */
 export const onScroll = (listener) => {
    document.addEventListener('scroll', listener);
};

/**
 * Scrolls to the top of the document
 */
export const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
};

/**
 * Scrolls to an element with header offset
 */
export const scrollto = (el, offsetted) => {
    let offset = 0;
    let header = 0;
    if (offsetted) {
        header = select(headerSelector).offsetHeight;
    }
    offset = header;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
    });
};

/**
 * Serializes a form selected.
 * @param {*} form
 * @returns JSON object with the fields and values of the passed param
 */
export const serializeForm = (form) => {
    if (typeof form == 'string') {
        form = select(form);
    }
    const formEntries = new FormData(form).entries();
    return Object.assign(...Array.from(formEntries, ([x,y]) => ({[x]:y})));
};

/**
 * Easy selector helper function.
 * @param {string} el Query string that is going to find an element.
 * @param {Boolean} all Sets if the listener is going to be set to ALL elements or only the first one.
 * @returns One or all found elements otherway is going to send an empty array or null depending on the [all] passed variable.
 */
export const select = (el, all = false, subquery = null) => {
    let response = null;
    if (typeof el != 'string' && isHTMLElement(el) && subquery) {
        if (all) {
            response = [...el.querySelectorAll(subquery)];
        } else {
            response = el.querySelector(subquery);
        }
    }
    if (typeof el == 'string') {
        el = el.trim();
        if (all) {
            response = [...document.querySelectorAll(el)];
        } else {
            response = document.querySelector(el);
        }
    }
    return response;
};

/**
 * Easy event listener function
 * @param {string} type The type of listener that is going to be placed to listen to.
 * @param {string} el Query string that is going to find an element.
 * @param {callback} listener Callback function to trigger when the listener is activated.
 * @param {Boolean} all Sets if the listener is going to be set to ALL elements or only the first one.
 */
export const on = (type, el, listener, all = false) => {
    if (typeof el == 'string') {
        el = select(el, all);
    }
    if (el) {
        if (all) {
            el.forEach(e => e.addEventListener(type, listener));
        } else {
            if (Array.isArray(el)) {
                el = el.shift();
            }
            el.addEventListener(type, listener);
        }
    }
};

/**
 * Adds a class to a given element.
 * @param {string} el Query string that is going to find an element.
 * @param {string} className The name of the new class to be added.
 * @param {boolean} all Sets if the listener is going to be set to ALL elements or only the first one.
 * @returns Boolean that says if it could add the class to the element.
 */
export const addClass = (el, className, all = false) => {
    if (typeof el == 'string') {
        el = select(el, all);
    }
    let success = false;
    if (el && className) {
        if (all) {
            el.forEach(e => e.classList.add(className));
        }
        if (!all) {
            el.classList.add(className);
        }
        success = true;
    }
    return success;
};

/**
 * Removes a class to a given element.
 * @param {string} el Query string that is going to find an element.
 * @param {string} className The name of the new class to be removed.
 * @param {boolean} all Sets if the listener is going to be set to ALL elements or only the first one.
 * @returns Boolean that says if it could add the class to the element.
 */
export const removeClass = (el, className, all = false) => {
    if (typeof el == 'string') {
        el = select(el, all);
    }
    let success = false;
    if (el && className) {
        if (all) {
            el.forEach(e => e.classList.remove(className));
        }
        if (!all) {
            el.classList.remove(className);
        }
        success = true;
    }
    return success;
};

/**
 * Toggles a class to a given element.
 * @param {string} el Query string that is going to find an element.
 * @param {string} className The name of the new class to be toggled.
 * @returns Boolean that says if it could add the class to the element.
 */
export const toggleClass = (el, className, all = false) => {
    if (typeof el == 'string') {
        el = select(el, all);
    }
    let success = false;
    if (el && className) {
        if (all) {
            el.forEach(e => e.classList.toggle(className));
        }
        if (!all) {
            el.classList.toggle(className);
        }
        success = true;
    }
    return success;
};

/**
 * Gets all the parents of an element.
 * @param {string} el Query string that is going to find an element.
 * @param {string} className The name of the new class to be added.
 * @param {Array} list The list of elements to return
 * @returns The found parents
 */
export const getParents = (el, className, list = []) => {
    if (typeof el == 'string') {
        el = select(el);
        if (!el) {
            return [el];
        }
        if (el && el.nodeName && el.nodeName.toLowerCase() !== 'html') {
            if (el.classList.contains(className)) {
                list.push(el);
            }
            return getParents(el.parentNode, className, list);
        }
        return list;
    }
    return getParentsFromElement(el, className);
};

/**
 * Gets all the parents of an element.
 * @param {HTMLElement} el HTML element to find parents.
 * @param {string} className The name of the new class to be added.
 * @param {Array} list The list of elements to return
 * @returns The found parents
 */
export const getParentsFromElement = (el, className, list = []) => {
    if (el && el.nodeName && el.nodeName.toLowerCase() !== 'html' && isHTMLElement(el)) {
        if (className && el.classList.contains(className)) {
            list.push(el);
        }
        return getParentsFromElement(el.parentNode, className, list);
    }
    return list;
};

/**
 * Knows if a passed element is relative to Element prototype recursively.
 * @param {HTMLElement | HTMLDivElement | HTMLElement} el HTML element to search the relationship with Element prototype.
 * @param {Boolean} isPrototype flag that points if the element or it's prototypes are relative to Element.
 * @param {Number} depth Numeric flag that points the actual depth of the prototypes search.
 * @returns {Boolean} isPrototype Value that after search deeply, points if the search of the relative Element prototype was found.
 */
export const isHTMLElement = (el, isPrototype = false, depth = 0) => {
    const father = Object.getPrototypeOf(el);
    isPrototype = isPrototype || Element.prototype.isPrototypeOf(father);
    if (!isPrototype && depth < maxRecursivityDepth) {
        return isHTMLElement(father, isPrototype, depth++);
    }
    return isPrototype;
};

/**
 * Knows if a passed element is relative to Event prototype recursively.
 * @param {PointerEvent | MouseEvent } el HTML element to search the relationship with Event prototype.
 * @param {Boolean} isPrototype flag that points if the element or it's prototypes are relative to Event.
 * @param {Number} depth Numeric flag that points the actual depth of the prototypes search.
 * @returns {Boolean} isPrototype Value that after search deeply, points if the search of the relative Event prototype was found.
 */
export const isHTMLEvent = (el, isPrototype = false, depth = 0) => {
    const father = Object.getPrototypeOf(el);
    isPrototype = isPrototype || Element.prototype.isPrototypeOf(father);
    if (!isPrototype && depth < maxRecursivityDepth) {
        return isHTMLElement(father, isPrototype, depth++);
    }
    return isPrototype;
};

/**
 * Gets all or the first child depending on the "all" flag and returns an array of children.
 * @param {HTMLElement | String} parent The HTMLElement or the string query to get the parent to dig for children.
 * @param {String} theClass The name of the class to find children.
 * @param {Boolean} all Flat that tells if there's the search for all or only the first one child with the class given.
 * @param {Array} children The list of children found.
 * @returns {Array} The list of children found.
 */
export const getChildrenByClass = (parent, theClass, all, children = []) => {
    if (typeof parent == 'string') {
        parent = select(parent);
    }
    if (theClass) {
        if (parent && parent.children) {
            const childList = parent.children;
            for (var i = 0; i < childList.length; i++) {
                if (childList[i].classList.contains(theClass)) {
                    children.push(childList[i]);
                    if (!all && i == 0) {
                        return children;
                    }
                }
                if (childList[i].children.length > 0) {
                    children.concat(getChildrenByClass(childList[i], theClass, children));
                }
            }
        }
    }
    return children;
};

const {host, port, protocol} = location;
const hasPort = port ? `:${port}` : '';

/**
 * Function to return the complete url where the user is.
 * @returns The complete url where is actualy.
 */
export const appUrl = () => `${protocol}//${host.replace(/\:[\d]*/, '')}${hasPort}`;

/**
 * Funcion that detects if a given element is within the actuva viewport.
 * @param {HTMLElement | string} el String to find an elementor HTMLElement to detect.
 * @returns Boolean that flags if element is within viewport.
 */
export const isElementInViewport = (el) => {
    if (typeof el == 'string') {
        el = select(el);
    }
    const rect = el.getBoundingClientRect();
    const headerHeight = select(headerSelector).offsetHeight;
    let action = Boolean(rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.top >= headerHeight && rect.bottom >= headerHeight);
    action = action || Boolean(rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.top < headerHeight && rect.bottom >= headerHeight);
    return action;
};

/**
 * Function that prevents an input to add frobidden chars.
 * @param {Event} event The event to handle the char.
 * @param {String} regexp The key for regExp to compare the value of the element.
 */
export const preventForbidenChar = (event, regexp) => {
    const { currentTarget } = event;
    if (currentTarget) {
        const { key } = event;
        if (key && !allowedKeys.includes(key) && !(event.ctrlKey && ['r', 'R'].includes(key)) && !(event.ctrlKey && event.shiftKey && ['r', 'R'].includes(key))) {
            const { valid } = inputValidator(key, regexp);
            if (!valid && event.preventDefault) {
                event.preventDefault();
            }
        }
    }
};

/**
 * Function that decides if a keyboard event was by pressing "Enter" key.
 * @param {Event} event The event to decide if was enter pressed to an input.
 */
export const checkIfEnter = (event, form) => {
    if (typeof form == 'string') {
        form = select(form);
    }
    const { currentTarget, key, keyCode } = event;
    if (currentTarget && key) {
        if (key && key.toLowerCase() === 'enter' || keyCode === 13) {
            form.submit();
        }
    }
};

/**
 * Function that removes the error class to a given input and hides the "help" text.
 * @param {Event} event Event passed to handle the class changing.
 */
export const removeErrorToInputs = (event) => {
    const { currentTarget } = event;
    if (currentTarget) {
        removeClass(currentTarget, 'is-danger');
        const parent = getParents(currentTarget, 'field').shift();
        getChildrenByClass(parent, 'help', true).forEach(child => addClass(child, 'is-hidden'));
    }
};
