// PartnerForm.jsx

import React, { useState, useEffect } from 'react';
import {
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
  User,
  Mail,
  Building2,
  Briefcase,
  Globe,
  MessageSquare,
  ChevronDown
} from 'lucide-react';

export default function PartnerForm({
  initialPartnershipType = '',
  selectedCategory = '',
  onSubmit
}) {
  const defaultCategory = initialPartnershipType || selectedCategory || '';

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organisation: '',
    role: '',
    partnershipInterest: defaultCategory,
    websiteOrLinkedin: '',
    collaborationDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Sync selected category prop changes if user clicks an option card
  useEffect(() => {
    const updatedCategory = initialPartnershipType || selectedCategory;
    if (updatedCategory) {
      setFormData((prev) => ({
        ...prev,
        partnershipInterest: updatedCategory
      }));
      if (errors.partnershipInterest) {
        setErrors((prev) => ({ ...prev, partnershipInterest: '' }));
      }
    }
  }, [initialPartnershipType, selectedCategory]);

  const partnershipOptions = [
    'Technology Partners',
    'Industry Partners',
    'Education Partners',
    'Research & Innovation Partners',
    'Community Partners',
    'Sponsorship & Support'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.workEmail.trim())) {
        newErrors.workEmail = 'Please enter a valid work email address.';
      }
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation name is required.';
    }

    if (!formData.partnershipInterest) {
      newErrors.partnershipInterest = 'Please select a partnership interest.';
    }

    if (!formData.collaborationDetails.trim()) {
      newErrors.collaborationDetails = 'Please describe how you would like to collaborate.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      if (typeof onSubmit === 'function') {
        await onSubmit(formData);
        setStatusMessage({
          type: 'success',
          text: 'Inquiry submitted successfully. Our partnership team will review your message.'
        });
        setFormData({
          fullName: '',
          workEmail: '',
          organisation: '',
          role: '',
          partnershipInterest: '',
          websiteOrLinkedin: '',
          collaborationDetails: ''
        });
      } else {
        // Honest notification when backend submission integration is pending
        setStatusMessage({
          type: 'info',
          text: 'Form validated successfully! Note: A backend API handler or submission service needs to be connected to deliver inquiries to the team.'
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'An error occurred while processing your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 text-left"
      aria-label="Partnership Inquiry Form"
    >
      {/* Status Feedback Banner */}
      {statusMessage && (
        <div
          role="alert"
          className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
            statusMessage.type === 'success'
              ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-200'
              : statusMessage.type === 'info'
              ? 'bg-blue-950/80 border-blue-500/50 text-blue-200'
              : 'bg-amber-950/80 border-amber-500/50 text-amber-200'
          }`}
        >
          {statusMessage.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          )}
          {statusMessage.type === 'info' && (
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          )}
          {statusMessage.type === 'error' && (
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="text-sm leading-relaxed">
            <span className="font-semibold block mb-0.5">
              {statusMessage.type === 'success'
                ? 'Submission Received'
                : statusMessage.type === 'info'
                ? 'Integration Notice'
                : 'Submission Error'}
            </span>
            {statusMessage.text}
          </div>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full Name</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Alex Rivera"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.fullName
                ? 'border-amber-500/80 focus:ring-amber-500'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
            } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="workEmail"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Work Email</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="alex@company.com"
            aria-required="true"
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.workEmail
                ? 'border-amber-500/80 focus:ring-amber-500'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
            } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
          />
          {errors.workEmail && (
            <p id="workEmail-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.workEmail}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Organisation & Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="organisation"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Organisation</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Acro Technologies"
            aria-required="true"
            aria-invalid={!!errors.organisation}
            aria-describedby={errors.organisation ? 'organisation-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.organisation
                ? 'border-amber-500/80 focus:ring-amber-500'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
            } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
          />
          {errors.organisation && (
            <p id="organisation-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.organisation}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Your Role</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Head of Engineering / Partnerships"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3: Partnership Interest & Website/LinkedIn */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="partnershipInterest"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <span>Partnership Interest</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="partnershipInterest"
              name="partnershipInterest"
              value={formData.partnershipInterest}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.partnershipInterest}
              aria-describedby={
                errors.partnershipInterest ? 'partnershipInterest-error' : undefined
              }
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border appearance-none ${
                errors.partnershipInterest
                  ? 'border-amber-500/80 focus:ring-amber-500'
                  : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
              } text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all cursor-pointer pr-10`}
            >
              <option value="" disabled className="bg-slate-950 text-slate-500">
                Select a partnership category...
              </option>
              {partnershipOptions.map((opt, idx) => (
                <option key={idx} value={opt} className="bg-slate-900 text-slate-100">
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.partnershipInterest && (
            <p
              id="partnershipInterest-error"
              className="mt-1.5 text-xs text-amber-400 flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.partnershipInterest}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="websiteOrLinkedin"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Website or LinkedIn</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="websiteOrLinkedin"
            name="websiteOrLinkedin"
            value={formData.websiteOrLinkedin}
            onChange={handleChange}
            placeholder="https://company.com or linkedin.com/in/..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Collaboration Details Textarea */}
      <div>
        <label
          htmlFor="collaborationDetails"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>How would you like to collaborate?</span>
          <span className="text-cyan-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="collaborationDetails"
          name="collaborationDetails"
          rows={4}
          value={formData.collaborationDetails}
          onChange={handleChange}
          placeholder="Briefly describe your organization's goals, technical background, and proposed collaboration ideas..."
          aria-required="true"
          aria-invalid={!!errors.collaborationDetails}
          aria-describedby={
            errors.collaborationDetails ? 'collaborationDetails-error' : undefined
          }
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
            errors.collaborationDetails
              ? 'border-amber-500/80 focus:ring-amber-500'
              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
          } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
        />
        {errors.collaborationDetails && (
          <p
            id="collaborationDetails-error"
            className="mt-1.5 text-xs text-amber-400 flex items-center gap-1"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.collaborationDetails}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Partnership Inquiry'}</span>
        </button>
      </div>
    </form>
  );
}

export { PartnerForm };