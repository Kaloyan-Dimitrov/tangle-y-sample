const functions = require('firebase-functions');
const admin = require('firebase-admin');
const rulesLib = require('firebase-database-rules-builder');
admin.initializeApp({
    apiKey: "AIzaSyBZt3lnm48pJMYnawYsnByeJkkmlnD18UE",
    authDomain: "tangle-demo.firebaseapp.com",
    databaseURL: "https://tangle-demo.firebaseio.com",
    projectId: "tangle-demo",
    storageBucket: "tangle-demo.appspot.com",
    messagingSenderId: "427444992546",
    appId: "1:427444992546:web:a4e6d6cb0c32a4bf9de87b",
    measurementId: "G-F9GK550YSJ"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.changeRules = functions.https.onCall(async (data, context) => {
    const newColumnRule = {};
    newColumnRule[data.colName] = {
        ".indexOn": [
            "name"
        ]
    }
    const oldRules = await admin.database().getRulesJSON();
    const newRules = {
        rules: {
            ".read": oldRules.rules[".read"],
            ".write": oldRules.rules[".write"],
            "dashboards": {
                "$customerID": {
                    "models": {
                        ...oldRules.rules.dashboards.$customerID.models,
                        ...newColumnRule
                    }
                }
            }
        }
    }
    const builder = new rulesLib.Builder();
    const source = builder.build(newRules);
    await admin.database().setRules(source);
    return (source);
});

exports.getRules = functions.https.onCall(async (data, context) => {
    const rules = await admin.database().getRulesJSON();
    return (rules);
});