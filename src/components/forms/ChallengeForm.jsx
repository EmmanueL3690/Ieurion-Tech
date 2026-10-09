// ChallengeForm.jsx

import React, { useState } from 'react';
import {
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
  User,
  Mail,
  Building2,
  Briefcase,
  ChevronDown,
  Globe,
  FileText,
  Users,
  Target,
  ShieldAlert,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

export default function ChallengeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    yourName: '',
    workEmail: '',
    organisation: '',
    yourRole: '',
    challengeType: '',
    challengeTitle: '',
    challengeDescription: '',
    whoIsAffected: '',
    desiredOutcome: '',
    relevantLinks: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const challengeTypes = [
    'Technology & Software',
    'Business & Operations',
    'Research & Experimentation',
    'Community & Social Impact',
    'Other'
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

    // 1. Your name - required
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Your name is required.';
    }

    // 2. Work email - required & validate format
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.workEmail.trim())) {
        newErrors.workEmail = 'Please enter a valid work email address.';
      }
    }

    // 5. Challenge type - required
    if (!formData.challengeType) {
      newErrors.challengeType = 'Please select a challenge type.';
    }

    // 6. Challenge title - required
    if (!formData.challengeTitle.trim()) {
      newErrors.challengeTitle = 'Challenge title is required.';
    }

    // 7. Describe the challenge - required
    if (!formData.challengeDescription.trim()) {
      newErrors.challengeDescription = 'Please describe the challenge.';
    }

    // 10. Relevant links - optional, validate URL format if filled
    if (formData.relevantLinks.trim()) {
      const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/.*)?$/i;
      if (!urlPattern.test(formData.relevantLinks.trim())) {
        newErrors.relevantLinks = 'Please enter a valid URL (e.g. https://example.com).';
      }
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
          text: 'Challenge submitted successfully. Our team will review your submission and follow up.'
        });
        setFormData({
          yourName: '',
          workEmail: '',
          organisation: '',
          yourRole: '',
          challengeType: '',
          challengeTitle: '',
          challengeDescription: '',
          whoIsAffected: '',
          desiredOutcome: '',
          relevantLinks: ''
        });
      } else {
        // Honest notification when backend submission integration is pending
        setStatusMessage({
          type: 'info',
          text: 'Form validated successfully! Note: A backend API handler or submission service needs to be connected to deliver submitted challenges to the team.'
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'An error occurred while submitting your challenge. Please try again.'
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
      aria-label="Submit a Challenge Form"
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
                ? 'Challenge Received'
                : statusMessage.type === 'info'
                ? 'Integration Notice'
                : 'Submission Error'}
            </span>
            {statusMessage.text}
          </div>
        </div>
      )}

      {/* Security & Confidentiality Note */}
      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-semibold text-slate-300">Privacy Notice:</span> Please do not include passwords, private credentials, confidential personal information, or sensitive data you are not authorized to share.
        </p>
      </div>

      {/* Row 1: Your Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="yourName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Your Name</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            placeholder="Alex Rivera"
            aria-required="true"
            aria-invalid={!!errors.yourName}
            aria-describedby={errors.yourName ? 'yourName-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.yourName
                ? 'border-amber-500/80 focus:ring-amber-500'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
            } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
          />
          {errors.yourName && (
            <p id="yourName-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.yourName}
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
            placeholder="alex@organisation.com"
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

      {/* Row 2: Organisation & Your Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="organisation"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Organisation</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Acro Labs / Independent"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="yourRole"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Your Role</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="yourRole"
            name="yourRole"
            value={formData.yourRole}
            onChange={handleChange}
            placeholder="Product Manager / Engineer / Founder"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3: Challenge Type & Relevant Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="challengeType"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Challenge Type</span>
            <span className="text-cyan-400" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="challengeType"
              name="challengeType"
              value={formData.challengeType}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.challengeType}
              aria-describedby={errors.challengeType ? 'challengeType-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border appearance-none ${
                errors.challengeType
                  ? 'border-amber-500/80 focus:ring-amber-500'
                  : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
              } text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all cursor-pointer pr-10`}
            >
              <option value="" disabled className="bg-slate-950 text-slate-500">
                Select a challenge category...
              </option>
              {challengeTypes.map((type, idx) => (
                <option key={idx} value={type} className="bg-slate-900 text-slate-100">
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.challengeType && (
            <p id="challengeType-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.challengeType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="relevantLinks"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <LinkIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Relevant Links</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="url"
            id="relevantLinks"
            name="relevantLinks"
            value={formData.relevantLinks}
            onChange={handleChange}
            placeholder="https://github.com/org/repo or public spec"
            aria-invalid={!!errors.relevantLinks}
            aria-describedby={errors.relevantLinks ? 'relevantLinks-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.relevantLinks
                ? 'border-amber-500/80 focus:ring-amber-500'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
            } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
          />
          {errors.relevantLinks && (
            <p id="relevantLinks-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.relevantLinks}
            </p>
          )}
        </div>
      </div>

      {/* Field 6: Challenge Title */}
      <div>
        <label
          htmlFor="challengeTitle"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Challenge Title</span>
          <span className="text-cyan-400" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="challengeTitle"
          name="challengeTitle"
          value={formData.challengeTitle}
          onChange={handleChange}
          placeholder="e.g. Automated Log Parsing & Anomaly Detection for Distributed Microservices"
          aria-required="true"
          aria-invalid={!!errors.challengeTitle}
          aria-describedby={errors.challengeTitle ? 'challengeTitle-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
            errors.challengeTitle
              ? 'border-amber-500/80 focus:ring-amber-500'
              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
          } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
        />
        {errors.challengeTitle && (
          <p id="challengeTitle-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.challengeTitle}
          </p>
        )}
      </div>

      {/* Field 7: Describe the Challenge */}
      <div>
        <label
          htmlFor="challengeDescription"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Describe the Challenge</span>
          <span className="text-cyan-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="challengeDescription"
          name="challengeDescription"
          rows={4}
          value={formData.challengeDescription}
          onChange={handleChange}
          placeholder="Detail the core problem, technical friction, or workflow bottleneck. What is broken or missing?"
          aria-required="true"
          aria-invalid={!!errors.challengeDescription}
          aria-describedby={errors.challengeDescription ? 'challengeDescription-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
            errors.challengeDescription
              ? 'border-amber-500/80 focus:ring-amber-500'
              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
          } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
        />
        {errors.challengeDescription && (
          <p id="challengeDescription-error" className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.challengeDescription}
          </p>
        )}
      </div>

      {/* Row 8 & 9: Who is affected & Desired outcome */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="whoIsAffected"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Who is affected by this problem?</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="whoIsAffected"
            name="whoIsAffected"
            rows={3}
            value={formData.whoIsAffected}
            onChange={handleChange}
            placeholder="e.g. On-call DevOps engineers, student researchers, daily platform users..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all resize-y"
          />
        </div>

        <div>
          <label
            htmlFor="desiredOutcome"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5"
          >
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>What outcome are you hoping for?</span>
            <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="desiredOutcome"
            name="desiredOutcome"
            rows={3}
            value={formData.desiredOutcome}
            onChange={handleChange}
            placeholder="e.g. A functional CLI tool, an open-source prototype, or a 50% reduction in processing time..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all resize-y"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
        >
          <span>{isSubmitting ? 'Submitting Challenge...' : 'Submit Challenge'}</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

export { ChallengeForm };