const em = (function () {
	let nodes = Array.from(document.querySelectorAll("body *:not(script)"));
	let nodesWithAttributes = [];
	let nodesWithClasses = [];
	let nodesWithIds = [];
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i].attributes.length > 0) {
			nodesWithAttributes.push(nodes[i]);
		}
		if (nodes[i].classList.length > 0) {
			nodesWithClasses.push(nodes[i]);
		}
		if (nodes[i].id) {
			nodesWithIds.push(nodes[i]);
		}
	}
	window.addEventListener("load", function () {
		const observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === "attributes") {
					if (mutation.target.attributes.length > 0) {
						nodesWithAttributes.push(mutation.target);
					} else {
						nodesWithAttributes.splice(nodesWithAttributes.indexOf(mutation.target), 1);
					}
				} else if (mutation.type === "childList") {
					if (mutation.removedNodes.length > 0) {
						for (let i = 0; i < mutation.removedNodes.length; i++) {
							if (mutation.removedNodes[i].nodeType === Node.ELEMENT_NODE) {
								if (mutation.removedNodes[i].attributes.length > 0) {
									nodesWithAttributes.splice(nodesWithAttributes.indexOf(mutation.removedNodes[i]), 1);
								}
								if (mutation.removedNodes[i].classList.length > 0) {
									nodesWithClasses.splice(nodesWithClasses.indexOf(mutation.removedNodes[i]), 1);
								}
								if (mutation.removedNodes[i].id) {
									nodesWithIds.splice(nodesWithIds.indexOf(mutation.removedNodes[i]), 1);
								}
								for (let j = nodes.length - 1; j >= 0; j--) {
									if (mutation.removedNodes[i].contains(nodes[j])) {
										nodes.splice(j, 1);
									}
								}
								for (let j = nodesWithAttributes.length - 1; j >= 0; j--) {
									if (mutation.removedNodes[i].contains(nodesWithAttributes[j])) {
										nodesWithAttributes.splice(j, 1);
									}
								}
								for (let j = nodesWithClasses.length - 1; j >= 0; j--) {
									if (mutation.removedNodes[i].contains(nodesWithClasses[j])) {
										nodesWithClasses.splice(j, 1);
									}
								}
								for (let j = nodesWithIds.length - 1; j >= 0; j--) {
									if (mutation.removedNodes[i].contains(nodesWithIds[j])) {
										nodesWithIds.splice(j, 1);
									}
								}
								if (nodes.includes(mutation.removedNodes[i])) {
									nodes.splice(nodes.indexOf(mutation.removedNodes[i]), 1);
								}
							}
						}
					}
					if (mutation.addedNodes.length > 0) {
						for (let i = 0; i < mutation.addedNodes.length; i++) {
							if (
								mutation.addedNodes[i].nodeType === Node.ELEMENT_NODE &&
								mutation.addedNodes[i].tagName.toLowerCase() !== "script"
							) {
								if (mutation.addedNodes[i].attributes.length > 0) {
									nodesWithAttributes.push(mutation.addedNodes[i]);
								}
								if (mutation.addedNodes[i].classList.length > 0) {
									nodesWithClasses.push(mutation.addedNodes[i]);
								}
								if (mutation.addedNodes[i].id) {
									nodesWithIds.push(mutation.addedNodes[i]);
								}
								if (nodes.indexOf(mutation.addedNodes[i]) === -1) {
									nodes.push(mutation.addedNodes[i]);
								}
							}
						}
					}
				}
			});
		});
		const config = { attributes: true, childList: true, subtree: true };
		observer.observe(document.querySelector("body"), config);
	});
	const queryProxy = (array, type, object) => {
		return new Proxy(object, {
			set: () => true,
			get(t, k, r) {
				const keys = Object.keys(t);
				switch (type) {
					case "class":
						if (!keys.includes(k)) {
							return [];
						}
						return array.filter(node => node.classList.contains(k));
					case "node":
						if (!keys.includes(k.toLowerCase())) {
							return [];
						}
						return array.filter(node => node.tagName.toLowerCase() === k.toLowerCase());
					case "id":
						if (!keys.includes(k)) {
							return [];
						}
						return array.filter(node => node.id === k);
					case "attr":
						const regex = /^(\w+)\.(.+)$/;
						const match = k.match(regex);
						const regex2 = /^(\w+)=(.+)$/;
						const match2 = k.match(regex2);
						if (match) {
							const [_, nodeType, attribute] = match;
							const [key, value] = attribute.split("=");
							return array.filter(node => {
								if (node.tagName.toLowerCase() === nodeType && node.hasAttribute(key)) {
									const attrValue = node.getAttribute(key);
									if (attrValue.trim() === value.trim()) {
										return true;
									}
								}
								return false;
							});
						} else if (match2) {
							const [_, key, value] = match2;
							return array.filter(node => node.hasAttribute(key) && node.getAttribute(key)?.trim() === value.trim());
						}
						return [];
					default:
						return [];
				}
			},
		});
	};
	const eventsName = [
		"click",
		"dblclick",
		"hover",
		"keydown",
		"keyup",
		"keypress",
		"mousedown",
		"mouseup",
		"mousemove",
		"drag",
		"dragstart",
		"dragend",
		"dragover",
		"dragleave",
		"dragenter",
		"drop",
		"focus",
		"blur",
		"input",
		"change",
		"submit",
		"load",
		"unload",
		"resize",
		"scroll",
		"play",
		"focusout",
		"pause",
		"animationstart",
		"animationend",
		"animationiteration",
		"transitionstart",
		"transitionend",
		"touchstart",
		"touchmove",
		"touchend",
		"orientationchange",
		"open",
		"close",
		"message",
		"error",
		"connection",
		"addstream",
		"removestream",
		"icecandidate",
		"datachannel",
	];
	let currentEvents;
	return new Proxy(["node", "class", "id", "attr", "events"], {
		get(t, k) {
			switch (k) {
				case "node":
					return queryProxy(
						nodes,
						k,
						nodes.reduce((acc, node) => {
							const tagName = node.tagName.toLowerCase();
							acc[tagName] ? acc[tagName]++ : (acc[tagName] = 1);
							return acc;
						}, {})
					);
				case "class":
					return queryProxy(
						nodesWithClasses,
						k,
						nodesWithClasses.reduce((acc, node) => {
							node.classList.forEach(className => {
								acc[className] ? acc[className]++ : (acc[className] = 1);
							});
							return acc;
						}, {})
					);
				case "id":
					return queryProxy(
						nodesWithIds,
						k,
						queryProxy(
							nodesWithIds,
							k,
							nodesWithIds.reduce((acc, node) => {
								acc[node.id] ? acc[node.id]++ : (acc[node.id] = 1);
								return acc;
							}, {})
						)
					);
				case "attr":
					return queryProxy(
						nodesWithAttributes,
						k,
						nodesWithAttributes.reduce((acc, node) => {
							const attributes = node.attributes;
							for (let i = 0; i < attributes.length; i++) {
								const key = attributes[i].name;
								const value = node.tagName.toLowerCase() + "." + attributes[i].value;
								if (!acc[key]) {
									acc[key] = {};
								}
								acc[key][value] ? acc[key][value]++ : (acc[key][value] = 1);
							}
							return acc;
						}, {})
					);
				case "events":
					return new Proxy(["tags", ...eventsName, "remove"], {
						set(t, k, v, r) {
							if (!t.includes(k)) {
								return true;
							}
							if (k === "tags") {
								const tags = v.flat(Infinity);
								if (!Array.isArray(tags)) {
									throw new Error("Tags must be an array");
								}
								tags.forEach(tag => {
									if (!(tag instanceof Node)) {
										throw new Error("Tags must be an array of Node elements");
									}
								});
								currentEvents = tags;
							} else if (eventsName.includes(k)) {
								if (typeof v !== "function") {
									throw new Error(`${k} must be a function`);
								}
								if (typeof currentEvents === "undefined") {
									throw new Error("No tags selected for events");
								}
								currentEvents.forEach(tag => {
									tag.addEventListener(k, v);
								});
							} else if (k === "remove") {
								if (
									typeof v !== "object" ||
									Array.isArray(v) ||
									typeof v.function !== "function" ||
									!Array.isArray(v.events) ||
									!Array.isArray(v.tags)
								) {
									throw new Error("Invalid argument for remove");
								}
								const { function: func, events, tags } = v;
								const tagsArray = tags.flat(Infinity);
								tagsArray.forEach(tag => {
									if (!(tag instanceof Node)) {
										throw new Error("Tags must be an array of Node elements");
									}
								});
								events.forEach(event => {
									if (!eventsName.includes(event)) {
										throw new Error(`${event} is not a valid event name`);
									}
								});
								tagsArray.forEach(tag => {
									events.forEach(event => {
										tag.removeEventListener(event, func);
									});
								});
							}
							return true;
						},
					});
				default:
					return [];
			}
		},
		set: () => true,
	});
})();
