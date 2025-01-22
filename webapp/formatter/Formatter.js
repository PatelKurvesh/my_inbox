sap.ui.define([
	"sap/ui/core/library"
], function (coreLibrary) {
	"use strict";

	const { ValueState } = coreLibrary;

    const Formatter = {
		status(sStatus) {
				if (sStatus === "High") {
					return ValueState.Error;
				} else if (sStatus === "Medium") {
					return ValueState.Warning;
				} else if (sStatus === "Low"){
					return ValueState.Information;
				} else {
					return ValueState.None;
				}
		}
	};

	return Formatter;
});
