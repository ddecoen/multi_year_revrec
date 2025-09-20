# ASC 606 License + PCS Revenue Recognition Calculator - Demo Examples

## Overview

This calculator implements the classic ASC 606 software revenue recognition scenario:
- **Software License**: One-time perpetual license (point in time recognition)
- **Post-Contract Support (PCS)**: Ongoing support services (over time recognition)

Based on the **relative standalone selling price (SSP)** allocation method as required by ASC 606.

## ASC 606 Example Implementation

This calculator is based on the standard ASC 606 guidance example:

### Example Contract
- **License SSP**: $8,000 (one-time cost)
- **PCS SSP**: $1,000 per year for 5 years = $5,000 total
- **Total SSP**: $13,000
- **Actual Contract Price**: $12,000

### SSP Allocation Calculation
- **License**: ($8,000 ÷ $13,000) × $12,000 = **$7,385** (56.77%)
- **PCS**: ($5,000 ÷ $13,000) × $12,000 = **$4,615** (38.46%)

### Revenue Recognition
- **License**: $7,385 recognized at point in time (when transferred)
- **PCS**: $4,615 recognized over 5 years ($923/year, $77/month)

## ASC 606 Five-Step Framework

### Step 1: Identify the Contract
- Software license and support agreement
- Clear pricing and terms
- Enforceable rights and obligations
- Commercial substance exists
- Collection is probable

### Step 2: Identify Performance Obligations

**Two Distinct Performance Obligations:**

1. **Software License**
   - Customer can benefit from software on its own
   - License is distinct from support services
   - Right to use software (not SaaS/hosted)
   - Recognized at point in time

2. **Post-Contract Support (PCS)**
   - Ongoing technical support, updates, patches
   - Distinct service that customer benefits from
   - Stand-ready obligation over contract term
   - Recognized over time (ratably)

### Step 3: Determine Transaction Price
- Fixed contract amount
- No variable consideration in basic example
- No significant financing component
- No non-cash consideration

### Step 4: Allocate Transaction Price

**Relative SSP Method:**
1. Determine SSP for each performance obligation
2. Calculate relative proportions
3. Allocate contract price proportionally

**SSP Determination Hierarchy:**
1. **Observable prices** (when sold separately)
2. **Adjusted market assessment** (competitor analysis)
3. **Expected cost plus margin** (cost-based approach)
4. **Residual approach** (only when highly variable/uncertain)

### Step 5: Recognize Revenue
- **License**: When customer obtains control (point in time)
- **PCS**: As services are provided (over time, ratably)

## Example Scenarios

### Example 1: Standard License + PCS (Default)

**Contract Details:**
- License SSP: $8,000
- PCS Annual SSP: $1,000
- Contract Term: 5 years
- Contract Price: $12,000

**Revenue Schedule:**

| Year | License | PCS | Total | Cumulative |
|------|---------|-----|-------|------------|
| 1 | $7,385 | $923 | $8,308 | $8,308 |
| 2 | $0 | $923 | $923 | $9,231 |
| 3 | $0 | $923 | $923 | $10,154 |
| 4 | $0 | $923 | $923 | $11,077 |
| 5 | $0 | $923 | $923 | $12,000 |

### Example 2: Premium License + Extended Support

**Contract Details:**
- License SSP: $15,000
- PCS Annual SSP: $2,000
- Contract Term: 3 years
- Contract Price: $18,000

**SSP Calculation:**
- Total SSP: $15,000 + ($2,000 × 3) = $21,000
- License Allocation: ($15,000 ÷ $21,000) × $18,000 = $12,857
- PCS Allocation: ($6,000 ÷ $21,000) × $18,000 = $5,143

**Revenue Schedule:**

| Year | License | PCS | Total | Cumulative |
|------|---------|-----|-------|------------|
| 1 | $12,857 | $1,714 | $14,571 | $14,571 |
| 2 | $0 | $1,714 | $1,714 | $16,285 |
| 3 | $0 | $1,715 | $1,715 | $18,000 |

### Example 3: Discounted Bundle

**Contract Details:**
- License SSP: $10,000
- PCS Annual SSP: $1,500
- Contract Term: 4 years
- Contract Price: $14,000 (discounted from $16,000 SSP)

**SSP Calculation:**
- Total SSP: $10,000 + ($1,500 × 4) = $16,000
- License Allocation: ($10,000 ÷ $16,000) × $14,000 = $8,750
- PCS Allocation: ($6,000 ÷ $16,000) × $14,000 = $5,250

**Revenue Schedule:**

| Year | License | PCS | Total | Cumulative |
|------|---------|-----|-------|------------|
| 1 | $8,750 | $1,313 | $10,063 | $10,063 |
| 2-4 | $0 | $1,312 | $1,312 | +$1,312/year |

## Key ASC 606 Considerations

### License vs. SaaS Distinction

**Software License (ASC 606):**
- ✅ Customer has right to use software
- ✅ Software resides on customer premises
- ✅ Customer controls the software
- ✅ Point in time recognition

**SaaS/Hosted (ASC 606):**
- ❌ Customer accesses but doesn't control software
- ❌ Software resides on vendor premises
- ❌ Over time recognition (subscription model)

### PCS Revenue Recognition

**Stand-Ready Obligation:**
- Customer simultaneously receives and consumes benefits
- Services provided on as-needed basis
- Even distribution over contract term is appropriate
- Monthly recognition = Annual PCS ÷ 12

**Time-Based Recognition:**
- Straight-line method typically appropriate
- Unless pattern of transfer differs significantly
- Consider actual usage patterns for complex arrangements

### SSP Determination Best Practices

**Observable SSP (Preferred):**
- Recent standalone sales of similar licenses
- Published rate cards for support services
- Consistent pricing across similar customers
- Renewal rates for existing PCS customers

**Estimation Methods:**

1. **Market Assessment:**
   - Competitor pricing analysis
   - Industry benchmark studies
   - Customer willingness-to-pay surveys

2. **Cost Plus Margin:**
   - Direct costs + reasonable profit margin
   - Consider development, delivery, support costs
   - Ensure margin reflects business model

3. **Residual Approach:**
   - Use only when SSP highly variable/uncertain
   - Typically applied to license component
   - Must meet strict ASC 606 criteria

## Technical Implementation

### Calculator Features

**Real-Time SSP Calculation:**
- Dynamic total PCS SSP based on term length
- Automatic percentage allocation updates
- Live formula display showing calculations
- Instant validation and error checking

**ASC 606 Compliance:**
- Five-step framework validation
- Relative SSP allocation method
- Proper timing recognition (point vs. over time)
- Professional audit documentation

**Professional Reporting:**
- Annual revenue schedule table
- Monthly PCS recognition amounts
- Cumulative revenue tracking
- Compliance summary checklist

### Browser Compatibility
- Modern browsers with ES6+ support
- Responsive mobile design
- No external dependencies
- Client-side processing only

### Data Security
- No data transmission or storage
- All calculations performed locally
- Privacy-first architecture
- HTTPS deployment recommended

## Industry Applications

### Enterprise Software
- ERP, CRM, specialized business applications
- Typical license:PCS ratio 60-80%:20-40%
- Multi-year PCS terms (1-5 years common)
- Premium support tiers with different SSPs

### Development Tools
- IDEs, development platforms, APIs
- Higher license percentage (70-90%)
- Lower support percentage (10-30%)
- Often annual renewal cycles

### Vertical Solutions
- Industry-specific software (healthcare, financial)
- Complex implementation services may create 3rd obligation
- Regulatory compliance features affect SSP
- Long-term customer relationships important

## Audit and Compliance

### Documentation Requirements
1. **SSP Analysis**: Supporting evidence for price determination
2. **Performance Obligations**: Clear identification and distinctness
3. **Revenue Recognition**: Timing and measurement support
4. **Internal Controls**: Process documentation and review

### Common Issues
1. **Insufficient SSP Evidence**: Need robust market analysis
2. **Bundled vs. Distinct**: Proper performance obligation identification
3. **Timing Errors**: Point in time vs. over time determination
4. **Allocation Mistakes**: Mathematical errors in relative SSP method

### Best Practices
1. **Regular SSP Updates**: Market conditions change pricing
2. **Consistent Application**: Same methodology across contracts
3. **Documentation**: Maintain supporting evidence files
4. **System Controls**: Automated calculations where possible

---

**Professional Note:** This calculator implements standard ASC 606 methodology for software license + support arrangements. For complex contracts, multiple performance obligations, or significant financing components, consult qualified accounting professionals.