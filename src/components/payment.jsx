import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import {
  Eye,
  Scan,
  Glasses,
  X,
  CheckCircle,
  CreditCard,
  Mail,
  User,
  ArrowLeft,
} from 'lucide-react';
import { serviceCategories } from '../data/services';

/* ── Category icon mapping ─────────────────────────────────────── */
const categoryIcons = {
  "General Services": Eye,
  "Ophthalmic Imaging & Investigation": Scan,
  "Optical Services": Glasses,
};

/* ── Individual service icon mapping ───────────────────────────── */
const serviceIconMap = {
  "reg": Eye,
  "reg-child": Eye,
  "consult": User,
  "consult-refraction": Glasses,
  "review-free": Eye,
  "subsequent": Eye,
  "iop-first": Scan,
  "iop-sub": Scan,
  "fast-track": CreditCard,
  "keratometry": Scan,
  "oct-pachy": Scan,
  "oct-rnfl": Scan,
  "oct-gcc": Scan,
  "oct-rnfl-gca": Scan,
  "macular-oct": Eye,
  "oct-mac-glauc": Eye,
  "tonometry": Scan,
  "visual-field": Eye,
  "refraction": Glasses,
  "cycloplegic": Glasses,
};

/* ── Payment modal with Paystack ────────────────────────────────── */
const PaymentModal = ({ service, onClose, onSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const [config, setConfig] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const email = form.email.trim() || 'info@haveneyeltd.com';
    setConfig({
      reference: `haven_${new Date().getTime()}`,
      email,
      amount: service.price * 100,
      currency: 'GHS',
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      metadata: {
        custom_fields: [
          { display_name: 'Customer Name', variable_name: 'customer_name', value: form.name },
          { display_name: 'Service', variable_name: 'service', value: service.name },
        ],
      },
    });
    setReady(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1d4f91] to-[#133f72] px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Selected Service</p>
          <h3 className="text-lg font-bold leading-tight">{service.name}</h3>
          <p className="text-2xl font-extrabold mt-1">GHS {service.price}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Kwame Asante"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full pl-9 pr-4 py-2.5 border rounded-lg text-sm outline-none transition-colors ${
                  errors.name
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-300 focus:border-[#1d4f91]'
                }`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full pl-9 pr-4 py-2.5 border rounded-lg text-sm outline-none transition-colors ${
                  errors.email
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-300 focus:border-[#1d4f91]'
                }`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {ready && config ? (
            <PaystackButton
              config={config}
              form={form}
              service={service}
              onSuccess={onSuccess}
              onClose={onClose}
            />
          ) : (
            <button
              type="submit"
              className="w-full bg-[#1d4f91] hover:bg-[#133f72] text-white font-semibold py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <CreditCard size={18} />
              Proceed to Pay — GHS {service.price}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full border-2 border-gray-300 text-gray-600 font-semibold py-2.5 rounded-full hover:border-gray-400 transition-colors text-sm"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

/* ── Paystack trigger (needs to be a child so hook runs with config) */
const PaystackButton = ({ config, form, service, onSuccess, onClose }) => {
  const initializePayment = usePaystackPayment(config);

  const handlePay = useCallback(() => {
    initializePayment({
      onSuccess: (reference) => {
        onSuccess({ reference, service, form });
      },
      onClose: () => {
        // keep modal open if user closes Paystack popup
      },
    });
  }, [initializePayment, onSuccess, service, form]);

  return (
    <button
      type="button"
      onClick={handlePay}
      className="w-full bg-[#1d4f91] hover:bg-[#133f72] text-white font-semibold py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
    >
      <CreditCard size={18} />
      Pay Now — GHS {service.price}
    </button>
  );
};

/* ── Success screen ─────────────────────────────────────────────── */
const SuccessScreen = ({ data, onReset }) => (
  <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
    <div className="bg-white rounded-2xl shadow-xl border border-green-100 max-w-md w-full p-8 text-center">
      <div className="flex justify-center mb-5">
        <CheckCircle size={64} className="text-green-500" strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
      <p className="text-gray-500 text-sm mb-6">
        Thank you, <span className="font-semibold text-gray-700">{data.form.name}</span>. Your payment has been received.
      </p>

      <div className="bg-[#eef4fb] rounded-xl p-5 text-left space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Service</span>
          <span className="font-semibold text-[#1d4f91] text-right max-w-[60%]">{data.service.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Amount Paid</span>
          <span className="font-bold text-gray-900">GHS {data.service.price}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Reference</span>
          <span className="font-mono text-xs text-gray-700 break-all text-right max-w-[60%]">
            {data.reference?.reference || data.reference?.trans || JSON.stringify(data.reference)}
          </span>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
        <p className="text-amber-800 text-sm font-medium">
          📋 Please show this reference number at the clinic reception on your visit.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onReset}
          className="w-full bg-[#1d4f91] hover:bg-[#133f72] text-white font-semibold py-3 rounded-full transition-colors"
        >
          Pay for Another Service
        </button>
        <Link
          to="/services"
          className="w-full border-2 border-[#1d4f91] text-[#1d4f91] font-semibold py-2.5 rounded-full hover:bg-[#1d4f91] hover:text-white transition-all text-sm text-center"
        >
          Back to Services
        </Link>
      </div>
    </div>
  </div>
);

/* ── Service card ───────────────────────────────────────────────── */
const ServiceCard = ({ service, onPayClick }) => {
  const Icon = serviceIconMap[service.id] || Eye;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Icon area */}
      <div className="bg-[#eef4fb] px-6 pt-6 pb-4 flex items-center gap-4">
        <div className="bg-white rounded-full p-3 shadow-sm border border-gray-100">
          <Icon size={22} className="text-[#1d4f91]" strokeWidth={1.75} />
        </div>
        <h3 className="font-bold text-[#1d4f91] text-sm leading-snug flex-1">
          {service.name}
        </h3>
      </div>

      {/* Price / badge */}
      <div className="px-6 py-4 flex-1 flex flex-col justify-between gap-4">
        <div>
          {service.isFree ? (
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              FREE
            </span>
          ) : service.isInquiry ? (
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Contact Us
            </span>
          ) : (
            <p className="text-2xl font-extrabold text-gray-900">
              GHS <span className="text-[#1d4f91]">{service.price}</span>
            </p>
          )}
        </div>

        {/* CTA button */}
        {service.isFree ? (
          <button
            disabled
            className="w-full bg-gray-100 text-gray-400 font-semibold py-2.5 rounded-full text-sm cursor-not-allowed"
          >
            No Payment Required
          </button>
        ) : service.isInquiry ? (
          <Link
            to="/contact"
            className="w-full block text-center border-2 border-[#1d4f91] text-[#1d4f91] font-semibold py-2.5 rounded-full hover:bg-[#1d4f91] hover:text-white transition-all text-sm"
          >
            Contact Us
          </Link>
        ) : (
          <button
            onClick={() => onPayClick(service)}
            className="w-full bg-[#1d4f91] hover:bg-[#133f72] text-white font-semibold py-2.5 rounded-full transition-colors duration-200 text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

/* ── Main Payment page ──────────────────────────────────────────── */
const Payment = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [successData, setSuccessData] = useState(null);

  const handlePayClick = (service) => {
    setSelectedService(service);
  };

  const handleModalClose = () => {
    setSelectedService(null);
  };

  const handleSuccess = (data) => {
    setSelectedService(null);
    setSuccessData(data);
  };

  const handleReset = () => {
    setSuccessData(null);
  };

  if (successData) {
    return <SuccessScreen data={successData} onReset={handleReset} />;
  }

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      {/* ── Hero ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-gradient-to-br from-[#1d4f91] to-[#133f72] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 rounded-full p-4">
              <CreditCard size={40} className="text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pay for Your Service
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Securely pay for your eye care services online before your visit. All transactions are protected by Paystack.
          </p>
        </div>
      </div>

      {/* ── Service categories ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-14">
          {serviceCategories.map((cat) => {
            const CatIcon = categoryIcons[cat.category] || Eye;
            return (
              <section key={cat.category}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#1d4f91] rounded-full p-2">
                    <CatIcon size={18} className="text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1d4f91]">
                    {cat.category}
                  </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onPayClick={handlePayClick}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* ── Bottom note ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 bg-[#eef4fb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-[#1d4f91] font-semibold">🔒 Secured by Paystack</span>
            <span>— All prices in GHS</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Need help?</span>
            <Link to="/contact" className="text-[#1d4f91] font-semibold hover:underline">
              Contact us
            </Link>
            <span>or call</span>
            <a href="tel:+233596915333" className="text-[#1d4f91] font-semibold hover:underline">
              +233 596 915 333
            </a>
          </div>
        </div>
      </div>

      {/* ── Payment modal ── */}
      {selectedService && (
        <PaymentModal
          service={selectedService}
          onClose={handleModalClose}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default Payment;
