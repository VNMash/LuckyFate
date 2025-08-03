import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Sparkles, Trophy, Star, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useParallax } from '../hooks/useParallax';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const navigate = useNavigate();
  const parallaxOffset = useParallax(0.3);

  // Floating animation elements
  const floatingElements = [
    { icon: Trophy, color: 'text-yellow-400', delay: '0s', size: 'w-8 h-8' },
    { icon: Star, color: 'text-blue-400', delay: '0.5s', size: 'w-6 h-6' },
    { icon: Heart, color: 'text-pink-400', delay: '1s', size: 'w-7 h-7' },
    { icon: Sparkles, color: 'text-purple-400', delay: '1.5s', size: 'w-5 h-5' },
    { icon: Trophy, color: 'text-green-400', delay: '2s', size: 'w-9 h-9' },
    { icon: Star, color: 'text-orange-400', delay: '2.5s', size: 'w-4 h-4' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if Supabase is properly configured
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('placeholder')) {
      showMessage('Supabase не налаштований. Будь ласка, налаштуйте змінні середовища.', 'error');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showMessage('Паролі не співпадають!', 'error');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      showMessage('Пароль повинен містити мінімум 6 символів!', 'error');
      setIsLoading(false);
      return;
    }

    try {
      // Sign up user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create profile in public.profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              email: formData.email,
              full_name: formData.fullName,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          ]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
          showMessage(`Профіль створено, але виникла помилка: ${profileError.message}`, 'error');
          return;
        }

        showMessage('Реєстрація успішна! Перевірте свою пошту для підтвердження.', 'success');
        
        // Auto switch to login after successful registration
        setTimeout(() => {
          setIsLogin(true);
          setFormData({ email: formData.email, password: '', confirmPassword: '', fullName: '' });
        }, 2000);
      }
    } catch (error: any) {
      showMessage(error.message || 'Помилка реєстрації', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if Supabase is properly configured
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('placeholder')) {
      showMessage('Supabase не налаштований. Будь ласка, налаштуйте змінні середовища.', 'error');
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) throw error;

      if (data.user) {
        showMessage('Вхід успішний! Перенаправляємо...', 'success');
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      }
    } catch (error: any) {
      if (error.message?.includes('Invalid login credentials')) {
        showMessage('Невірний email або пароль. Перевірте дані або зареєструйтесь.', 'error');
      } else {
        showMessage(error.message || 'Помилка входу', 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <div
              key={index}
              className={`absolute ${element.color} ${element.size} opacity-20`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float 6s ease-in-out infinite`,
                animationDelay: element.delay,
                transform: `translateY(${parallaxOffset * (0.1 + index * 0.05)}px)`
              }}
            >
              <IconComponent className="w-full h-full" />
            </div>
          );
        })}
      </div>

      {/* Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div 
          className="w-full max-w-md"
          style={{ 
            animation: 'slideInFromBottom 1s ease-out forwards',
            opacity: 0
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-2xl">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {isLogin ? 'Вхід' : 'Реєстрація'}
              </h1>
            </div>
            <p className="text-white/80 text-lg">
              {isLogin ? 'Ласкаво просимо назад!' : 'Приєднуйтесь до LuckyFate!'}
            </p>
          </div>

          {/* Auth Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500">
            {/* Message */}
            {message && (
              <div 
                className={`mb-6 p-4 rounded-xl text-center font-medium ${
                  messageType === 'success' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
                style={{ animation: 'slideInFromTop 0.5s ease-out' }}
              >
                {message}
              </div>
            )}

            <form onSubmit={isLogin ? handleSignIn : handleSignUp} className="space-y-6">
              {/* Full Name (Registration only) */}
              {!isLogin && (
                <div 
                  className="space-y-2"
                  style={{ animation: 'fadeInLeft 0.6s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}
                >
                  <label className="text-white/90 font-medium">Повне ім'я</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Введіть ваше повне ім'я"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div 
                className="space-y-2"
                style={{ animation: 'fadeInLeft 0.6s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}
              >
                <label className="text-white/90 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Введіть ваш email"
                  />
                </div>
              </div>

              {/* Password */}
              <div 
                className="space-y-2"
                style={{ animation: 'fadeInLeft 0.6s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}
              >
                <label className="text-white/90 font-medium">Пароль</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Введіть пароль"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Registration only) */}
              {!isLogin && (
                <div 
                  className="space-y-2"
                  style={{ animation: 'fadeInLeft 0.6s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}
                >
                  <label className="text-white/90 font-medium">Підтвердіть пароль</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Підтвердіть пароль"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.5s', opacity: 0 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{isLogin ? 'Входимо...' : 'Реєструємо...'}</span>
                  </div>
                ) : (
                  <span>{isLogin ? 'Увійти' : 'Зареєструватися'}</span>
                )}
              </button>
            </form>

            {/* Switch Mode */}
            <div 
              className="mt-8 text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.6s', opacity: 0 }}
            >
              <p className="text-white/70 mb-4">
                {isLogin ? 'Ще не маєте акаунту?' : 'Вже маєте акаунт?'}
              </p>
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ email: '', password: '', confirmPassword: '', fullName: '' });
                  setMessage('');
                }}
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-lg hover:underline transition-all duration-300"
              >
                {isLogin ? 'Зареєструватися' : 'Увійти'}
              </button>
            </div>
          </div>

          {/* Features */}
          <div 
            className="mt-8 grid grid-cols-3 gap-4 text-center"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.7s', opacity: 0 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white/80 text-sm">Виграй призи</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white/80 text-sm">Бонуси</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Heart className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <p className="text-white/80 text-sm">Спільнота</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;