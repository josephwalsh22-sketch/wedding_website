import React, { useState } from "react";
import "./RSVP.scss";
import villaChairsInside from "../images/wedding backgrounds/villa-chairs-inside.webp";
import waggingFinger from "../images/wagging-finger.gif";
import loadingGif from "../images/loading.gif";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const RSVP = () => {
  const { language } = useLanguage();
  const t = translations[language].rsvp;
  const [formData, setFormData] = useState({
    yourName: "",
    attending: "yes",
    babies: "0",
    childrenUnder10: "0",
    namesAttending: "",
    dietaryRestrictions: "",
    foodAllergies: "",
    message: "",
  });

  const [validationError, setValidationError] = useState("");
  const [attendingNames, setAttendingNames] = useState([]); // Names of guests attending (including main person)
  const [notAttendingNames, setNotAttendingNames] = useState([]); // Names of guests not attending
  const [selectedBabies, setSelectedBabies] = useState([]); // Array of guest names who are babies
  const [selectedChildren, setSelectedChildren] = useState([]); // Array of guest names who are children
  const [dietaryRequirements, setDietaryRequirements] = useState([]);
  const [foodAllergies, setFoodAllergies] = useState([]);
  const [showJoeAlert, setShowJoeAlert] = useState(false); // Show Joe Schuldt alert modal
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [isSubmitted, setIsSubmitted] = useState(false); // Success state
  const [wasAttending, setWasAttending] = useState(true); // Track if user was attending
  const [hasMixedResponse, setHasMixedResponse] = useState(false); // Track if some guests not attending
  const [submittedName, setSubmittedName] = useState(""); // Track the name of the person who submitted

  // Helper function to check if a name is Joe Schuldt
  const isJoeSchuldt = (name) => {
    const normalizedName = name.toLowerCase().trim();
    const joeNames = ["joe schuldt", "joseph schuldt", "joe", "jimmy mac"];
    return joeNames.some((joeName) => normalizedName === joeName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If yourName is being cleared, reset attending to "yes"
    if (name === "yourName" && !value.trim()) {
      setFormData((prev) => ({
        ...prev,
        yourName: value,
        attending: "yes",
      }));

      // Clear validation error when user makes changes
      if (validationError) {
        setValidationError("");
      }
      return;
    }

    // Check if Joe Schuldt is trying to decline
    if (name === "attending" && value === "no") {
      // Check all attending names (including any already entered)
      const allNames = [formData.yourName, ...attendingNames];
      const hasJoe = allNames.some((n) => n && isJoeSchuldt(n));

      if (hasJoe) {
        setShowJoeAlert(true);
        return; // Don't update the state
      }

      // Clear attending names for other users
      setAttendingNames([]);
      setSelectedBabies([]);
      setSelectedChildren([]);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when user makes changes
    if (validationError) {
      setValidationError("");
    }
  };

  const handleAttendingNameChange = (index, value) => {
    const oldName = attendingNames[index];
    const newNames = [...attendingNames];
    newNames[index] = value;
    setAttendingNames(newNames);

    // If old name was selected as baby/child, remove it from selections
    if (oldName && oldName.trim() !== "") {
      setSelectedBabies((prev) => prev.filter((name) => name !== oldName));
      setSelectedChildren((prev) => prev.filter((name) => name !== oldName));
    }

    // Clear validation error when user makes changes
    if (validationError) {
      setValidationError("");
    }
  };

  const handleAddAttendingName = () => {
    setAttendingNames([...attendingNames, ""]);
  };

  const handleRemoveAttendingName = (index) => {
    const oldName = attendingNames[index];
    const newNames = attendingNames.filter((_, i) => i !== index);
    setAttendingNames(newNames);

    // If removed name was selected as baby/child, remove it from selections
    if (oldName && oldName.trim() !== "") {
      setSelectedBabies((prev) => prev.filter((name) => name !== oldName));
      setSelectedChildren((prev) => prev.filter((name) => name !== oldName));
    }
  };

  const handleNotAttendingNameChange = (index, value) => {
    const newNames = [...notAttendingNames];
    newNames[index] = value;
    setNotAttendingNames(newNames);

    // Clear validation error when user makes changes
    if (validationError) {
      setValidationError("");
    }
  };

  const handleAddNotAttendingName = () => {
    setNotAttendingNames([...notAttendingNames, ""]);
  };

  const handleRemoveNotAttendingName = (index) => {
    const newNames = notAttendingNames.filter((_, i) => i !== index);
    setNotAttendingNames(newNames);
  };

  const handleAddDietaryRequirement = () => {
    setDietaryRequirements([
      ...dietaryRequirements,
      { type: "none", guestName: "" },
    ]);
  };

  const handleRemoveDietaryRequirement = (index) => {
    const newRequirements = dietaryRequirements.filter((_, i) => i !== index);
    setDietaryRequirements(newRequirements);
  };

  const handleDietaryRequirementChange = (index, field, value) => {
    const newRequirements = [...dietaryRequirements];
    newRequirements[index][field] = value;
    setDietaryRequirements(newRequirements);
  };

  const handleAddFoodAllergy = () => {
    setFoodAllergies([...foodAllergies, { allergy: "", guestName: "" }]);
  };

  const handleRemoveFoodAllergy = (index) => {
    const newAllergies = foodAllergies.filter((_, i) => i !== index);
    setFoodAllergies(newAllergies);
  };

  const handleFoodAllergyChange = (index, field, value) => {
    const newAllergies = [...foodAllergies];
    newAllergies[index][field] = value;
    setFoodAllergies(newAllergies);
  };

  // Get all guest names (Your Name + all other attending names)
  const getAllGuestNames = () => {
    const names = [];
    if (formData.yourName.trim()) {
      names.push(formData.yourName);
    }
    names.push(...attendingNames.filter((name) => name.trim() !== ""));
    return names;
  };

  const handleAddBaby = () => {
    setSelectedBabies([...selectedBabies, ""]);
  };

  const handleRemoveBaby = (index) => {
    const newBabies = selectedBabies.filter((_, i) => i !== index);
    setSelectedBabies(newBabies);
  };

  const handleBabyChange = (index, value) => {
    const newBabies = [...selectedBabies];
    newBabies[index] = value;
    setSelectedBabies(newBabies);
  };

  const handleAddChild = () => {
    setSelectedChildren([...selectedChildren, ""]);
  };

  const handleRemoveChild = (index) => {
    const newChildren = selectedChildren.filter((_, i) => i !== index);
    setSelectedChildren(newChildren);
  };

  const handleChildChange = (index, value) => {
    const newChildren = [...selectedChildren];
    newChildren[index] = value;
    setSelectedChildren(newChildren);
  };

  // Check if form has minimum required data
  const isFormValid = () => {
    // Must have "Your Name" filled
    return formData.yourName.trim() !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);

    // Validation: "Your Name" is required (already checked by isFormValid)
    // No need to check for additional guests - "Your Name" counts as a guest

    // Clear any previous validation errors
    setValidationError("");

    // Prepare the data to send
    const attendingValue = formData.attending === "yes" ? "Yes" : "No";

    // Build array of all attending guest names - include "Your Name" first
    const allGuestNames = [
      formData.yourName,
      ...attendingNames.filter((name) => name.trim() !== ""),
    ];

    // Build guest objects with individual attributes
    const guests = allGuestNames.map((name) => {
      // Check if this guest is a baby
      const isBaby = selectedBabies.includes(name);

      // Check if this guest is a child
      const isChild = selectedChildren.includes(name);

      // Find dietary requirement for this guest
      const dietaryReq = dietaryRequirements.find(
        (req) => req.guestName === name && req.type !== "none",
      );

      // Find food allergy for this guest
      const foodAllergy = foodAllergies.find(
        (allergy) =>
          allergy.guestName === name && allergy.allergy.trim() !== "",
      );

      return {
        name: name,
        isBaby: isBaby,
        isChild: isChild,
        dietaryRequirement: dietaryReq ? dietaryReq.type : "None",
        foodAllergy: foodAllergy ? foodAllergy.allergy : "None",
      };
    });

    // Build array of not attending guest names
    const notAttendingList = notAttendingNames.filter(
      (name) => name.trim() !== "",
    );

    // Prepare data for Google Sheets
    const sheetData = {
      attending: attendingValue,
      guests: guests,
      notAttending: notAttendingList,
      message: formData.message || "",
      confirmedBy: formData.yourName, // Use "Your Name" as the person confirming
    };

    console.log("Submitting to Google Sheets:", sheetData);

    // Set loading state and track attendance status
    setIsSubmitting(true);
    setWasAttending(formData.attending === "yes");
    setSubmittedName(formData.yourName);

    // Check if there's a mixed response (some attending, some not attending)
    const hasNotAttending = notAttendingList.length > 0;
    const isAttending = formData.attending === "yes";
    setHasMixedResponse(isAttending && hasNotAttending);

    // POST to Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbxgndUPoXguQswjF6xxL2MKJdC6cr4AKKQF9nW0SDC_WYlKrviSbyOYYYaYS8lsR8NV/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      },
    )
      .then(() => {
        console.log("RSVP submitted successfully");
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Clear form data
        setFormData({
          yourName: "",
          attending: "yes",
          babies: "0",
          childrenUnder10: "0",
          namesAttending: "",
          dietaryRestrictions: "",
          foodAllergies: "",
          message: "",
        });
        setAttendingNames([]);
        setNotAttendingNames([]);
        setSelectedBabies([]);
        setSelectedChildren([]);
        setDietaryRequirements([]);
        setFoodAllergies([]);
      })
      .catch((error) => {
        console.error("Error submitting RSVP:", error);
        setIsSubmitting(false);
        alert(t.errorMessage);
      });
  };

  return (
    <div className="rsvp-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaChairsInside})` }}
      >
        <div className="header-overlay">
          <h1>{t.title}</h1>
          <p className="header-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <section className="rsvp-section">
        <div className="container">
          {/* Show loading state */}
          {isSubmitting && (
            <div className="rsvp-loading">
              <img src={loadingGif} alt="Loading..." className="loading-gif" />
            </div>
          )}

          {/* Show success message */}
          {isSubmitted && !isSubmitting && (
            <div className="rsvp-success">
              <p className="greeting">
                {t.dearGuest} {submittedName},
              </p>

              <p className="message-body">
                {wasAttending && !hasMixedResponse && t.thankYouAttending}
                {!wasAttending && t.thankYouNotAttending}
                {hasMixedResponse && t.thankYouMixed}
              </p>

              {wasAttending && (
                <p className="look-forward">{t.lookForwardTo}</p>
              )}

              <p className="closing">{t.withLove}</p>
              <p className="signature">{t.coupleNames}</p>
            </div>
          )}

          {/* Show form only if not submitting and not submitted */}
          {!isSubmitting && !isSubmitted && (
            <>
              <p className="rsvp-intro">{t.intro}</p>

              {validationError && (
                <div className="validation-error">
                  <span className="error-icon">⚠️</span>
                  <p>{validationError}</p>
                </div>
              )}

              <form className="rsvp-form" onSubmit={handleSubmit}>
                {/* Your Name - First */}
                <div className="form-group">
                  <label htmlFor="yourName">
                    {t.yourName} *
                    <span className="tooltip" title={t.yourNameTooltip}>
                      ℹ️
                    </span>
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    placeholder={t.yourNamePlaceholder}
                    required
                  />
                </div>

                {/* Attendance */}
                <div className="form-group">
                  <label htmlFor="attending">
                    {t.willYouAttend} *
                    {!formData.yourName.trim() && (
                      <span className="tooltip" title={t.pleaseEnterNameFirst}>
                        ℹ️
                      </span>
                    )}
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    disabled={!formData.yourName.trim()}
                    required
                  >
                    <option value="yes">{t.yesAttending}</option>
                    <option value="no">{t.noAttending}</option>
                  </select>
                </div>

                {/* Names of Guests Attending */}
                <div
                  className={`form-group ${!formData.yourName.trim() ? "disabled" : ""}`}
                >
                  <label>
                    {t.otherGuestsAttending}
                    <span
                      className="tooltip"
                      title={t.otherGuestsAttendingTooltip}
                    >
                      ℹ️
                    </span>
                  </label>
                  <div className="guest-names-list">
                    {attendingNames.map((name, index) => (
                      <div key={index} className="not-attending-row">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) =>
                            handleAttendingNameChange(index, e.target.value)
                          }
                          placeholder={`${t.guestFullName} ${index + 1} ${t.fullName}`}
                          className="guest-name-input"
                          disabled={!formData.yourName.trim()}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveAttendingName(index)}
                          className="remove-not-attending-btn"
                          disabled={!formData.yourName.trim()}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleAddAttendingName}
                    className="add-not-attending-btn"
                    disabled={!formData.yourName.trim()}
                  >
                    {t.addGuestAttending}
                  </button>
                </div>

                {/* Names of Guests Not Attending */}
                <div
                  className={`form-group ${!formData.yourName.trim() ? "disabled" : ""}`}
                >
                  <label>
                    {t.otherGuestsNotAttending}
                    <span
                      className="tooltip"
                      title={t.otherGuestsNotAttendingTooltip}
                    >
                      ℹ️
                    </span>
                  </label>
                  <div className="guest-names-list">
                    {notAttendingNames.map((name, index) => (
                      <div key={index} className="not-attending-row">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) =>
                            handleNotAttendingNameChange(index, e.target.value)
                          }
                          placeholder={`${t.guestFullName} ${index + 1} ${t.fullName}`}
                          className="guest-name-input"
                          disabled={!formData.yourName.trim()}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveNotAttendingName(index)}
                          className="remove-not-attending-btn"
                          disabled={!formData.yourName.trim()}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleAddNotAttendingName}
                    className="add-not-attending-btn"
                    disabled={!formData.yourName.trim()}
                  >
                    {t.addGuestNotAttending}
                  </button>
                </div>

                {/* Babies */}
                <div
                  className={`form-group ${attendingNames.filter((name) => name.trim() !== "").length < 1 ? "disabled" : ""}`}
                >
                  <label>
                    {t.attendingBabies}
                    <span className="tooltip" title={t.attendingBabiesTooltip}>
                      ℹ️
                    </span>
                  </label>

                  {selectedBabies.map((babyName, index) => (
                    <div key={index} className="baby-row">
                      <select
                        value={babyName}
                        onChange={(e) =>
                          handleBabyChange(index, e.target.value)
                        }
                        className="baby-select"
                        disabled={
                          attendingNames.filter((name) => name.trim() !== "")
                            .length < 1
                        }
                      >
                        <option value="">{t.selectBaby}</option>
                        {getAllGuestNames().map((name, nameIndex) => (
                          <option
                            key={nameIndex}
                            value={name}
                            disabled={
                              selectedChildren.includes(name) ||
                              (selectedBabies.includes(name) &&
                                babyName !== name)
                            }
                          >
                            {name || `${t.guestFullName} ${nameIndex + 1}`}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => handleRemoveBaby(index)}
                        className="remove-baby-btn"
                        disabled={
                          attendingNames.filter((name) => name.trim() !== "")
                            .length < 1
                        }
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddBaby}
                    className="add-baby-btn"
                    disabled={
                      attendingNames.filter((name) => name.trim() !== "")
                        .length < 1
                    }
                  >
                    {t.addBaby}
                  </button>
                </div>

                {/* Children Under 10 */}
                <div
                  className={`form-group ${attendingNames.filter((name) => name.trim() !== "").length < 1 ? "disabled" : ""}`}
                >
                  <label>
                    {t.attendingChildren}
                    <span
                      className="tooltip"
                      title={t.attendingChildrenTooltip}
                    >
                      ℹ️
                    </span>
                  </label>

                  {selectedChildren.map((childName, index) => (
                    <div key={index} className="child-row">
                      <select
                        value={childName}
                        onChange={(e) =>
                          handleChildChange(index, e.target.value)
                        }
                        className="child-select"
                        disabled={
                          attendingNames.filter((name) => name.trim() !== "")
                            .length < 1
                        }
                      >
                        <option value="">{t.selectChild}</option>
                        {getAllGuestNames().map((name, nameIndex) => (
                          <option
                            key={nameIndex}
                            value={name}
                            disabled={
                              selectedBabies.includes(name) ||
                              (selectedChildren.includes(name) &&
                                childName !== name)
                            }
                          >
                            {name || `${t.guestFullName} ${nameIndex + 1}`}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => handleRemoveChild(index)}
                        className="remove-child-btn"
                        disabled={
                          attendingNames.filter((name) => name.trim() !== "")
                            .length < 1
                        }
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddChild}
                    className="add-child-btn"
                    disabled={
                      attendingNames.filter((name) => name.trim() !== "")
                        .length < 1
                    }
                  >
                    {t.addChild}
                  </button>
                </div>

                {/* Dietary Requirements */}
                <div
                  className={`form-group ${!formData.yourName.trim() ? "disabled" : ""}`}
                >
                  <label>
                    {t.dietaryRequirements}
                    <span
                      className="tooltip"
                      title={t.dietaryRequirementsTooltip}
                    >
                      ℹ️
                    </span>
                  </label>

                  {dietaryRequirements.map((requirement, index) => (
                    <div key={index} className="dietary-requirement-row">
                      <select
                        value={requirement.type}
                        onChange={(e) =>
                          handleDietaryRequirementChange(
                            index,
                            "type",
                            e.target.value,
                          )
                        }
                        className="dietary-type-select"
                        disabled={!formData.yourName.trim()}
                      >
                        <option value="none">{t.none}</option>
                        <option value="Vegan">{t.vegan}</option>
                        <option value="Vegetarian">{t.vegetarian}</option>
                      </select>

                      <select
                        value={requirement.guestName}
                        onChange={(e) =>
                          handleDietaryRequirementChange(
                            index,
                            "guestName",
                            e.target.value,
                          )
                        }
                        className="dietary-guest-select"
                        disabled={
                          requirement.type === "none" ||
                          !formData.yourName.trim()
                        }
                      >
                        <option value="">{t.selectGuest}</option>
                        {getAllGuestNames().map((name, nameIndex) => (
                          <option key={nameIndex} value={name}>
                            {name || `${t.guestFullName} ${nameIndex + 1}`}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => handleRemoveDietaryRequirement(index)}
                        className="remove-dietary-btn"
                        disabled={!formData.yourName.trim()}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddDietaryRequirement}
                    className="add-dietary-btn"
                    disabled={!formData.yourName.trim()}
                  >
                    {t.addDietaryRequirement}
                  </button>
                </div>

                {/* Food Allergies */}
                <div
                  className={`form-group ${!formData.yourName.trim() ? "disabled" : ""}`}
                >
                  <label>
                    {t.foodAllergies}
                    <span className="tooltip" title={t.foodAllergiesTooltip}>
                      ℹ️
                    </span>
                  </label>

                  {foodAllergies.map((allergy, index) => (
                    <div key={index} className="allergy-row">
                      <input
                        type="text"
                        value={allergy.allergy}
                        onChange={(e) =>
                          handleFoodAllergyChange(
                            index,
                            "allergy",
                            e.target.value,
                          )
                        }
                        placeholder={t.foodAllergiesPlaceholder}
                        className="allergy-input"
                        disabled={!formData.yourName.trim()}
                      />

                      <select
                        value={allergy.guestName}
                        onChange={(e) =>
                          handleFoodAllergyChange(
                            index,
                            "guestName",
                            e.target.value,
                          )
                        }
                        className="allergy-guest-select"
                        disabled={!formData.yourName.trim()}
                      >
                        <option value="">{t.selectGuest}</option>
                        {getAllGuestNames().map((name, nameIndex) => (
                          <option key={nameIndex} value={name}>
                            {name || `${t.guestFullName} ${nameIndex + 1}`}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => handleRemoveFoodAllergy(index)}
                        className="remove-allergy-btn"
                        disabled={!formData.yourName.trim()}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddFoodAllergy}
                    className="add-allergy-btn"
                    disabled={!formData.yourName.trim()}
                  >
                    {t.addFoodAllergy}
                  </button>
                </div>

                {/* Message to Couple */}
                <div className="form-group">
                  <label htmlFor="message">
                    {t.messageToCouple}
                    <span className="tooltip" title={t.messageToCoupleTooltip}>
                      ℹ️
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isFormValid()}
                >
                  {t.submitRSVP}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Joe Schuldt Alert Modal */}
      {showJoeAlert && (
        <div
          className="joe-alert-overlay"
          onClick={() => setShowJoeAlert(false)}
        >
          <div className="joe-alert-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={waggingFinger}
              alt="Wagging finger"
              className="wagging-finger"
            />
            <h2>{t.joeAlertTitle}</h2>
            <p>{t.joeAlertMessage}</p>
            <p>{t.joeAlertInsult}</p>
            <button
              onClick={() => setShowJoeAlert(false)}
              className="joe-alert-btn"
            >
              {t.joeAlertButton}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
