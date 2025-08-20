export interface SEOValidationResult {
  isValid: boolean;
  warnings: string[];
  errors: string[];
}

export const validatePageSEO = (data: {
  title: string;
  description: string;
  keywords?: string;
}): SEOValidationResult => {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Title validation
  if (!data.title) {
    errors.push('Title is required');
  } else {
    if (data.title.length < 30) {
      warnings.push('Title is too short (< 30 characters) - consider making it more descriptive');
    }
    if (data.title.length > 60) {
      warnings.push('Title is too long (> 60 characters) - may be truncated in search results');
    }
  }

  // Description validation
  if (!data.description) {
    errors.push('Description is required');
  } else {
    if (data.description.length < 120) {
      warnings.push('Description is too short (< 120 characters) - consider making it more descriptive');
    }
    if (data.description.length > 160) {
      warnings.push('Description is too long (> 160 characters) - may be truncated in search results');
    }
  }

  // Keywords validation
  if (data.keywords) {
    const keywordCount = data.keywords.split(',').length;
    if (keywordCount > 10) {
      warnings.push('Too many keywords - consider focusing on 5-10 most relevant keywords');
    }
  }

  // Content relevance checks
  const targetKeywords = ['pakistan', 'uae', 'cargo', 'shipping', 'freight'];
  const titleLower = data.title.toLowerCase();
  const hasRelevantKeywords = targetKeywords.some(keyword => titleLower.includes(keyword));
  
  if (!hasRelevantKeywords) {
    warnings.push('Consider including relevant keywords (Pakistan, UAE, cargo, shipping) in title');
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors
  };
};

export const logSEOValidation = (result: SEOValidationResult, pageName?: string) => {
  if (process.env.NODE_ENV === 'development') {
    if (result.errors.length > 0) {
      console.error(`SEO Errors${pageName ? ` (${pageName})` : ''}:`, result.errors);
    }
    if (result.warnings.length > 0) {
      console.warn(`SEO Warnings${pageName ? ` (${pageName})` : ''}:`, result.warnings);
    }
  }
};