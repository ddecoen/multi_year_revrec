# ASC 606 Term-Based Software + Support Revenue Recognition Calculator - Demo Examples

## Overview

This calculator handles **term-based software licenses** (like Coder) versus traditional **perpetual software licenses**, with proper ASC 606 revenue recognition methodology.

### Key Distinction for Coder's Business Model

**Coder sells term-based on-premises software** - this is fundamentally different from perpetual licenses and affects revenue recognition timing:

- **Term-Based License**: Customer has right to use software for contract term only
- **Revenue Recognition**: Both license and support recognized over time (ratably)
- **Business Rationale**: Customer benefits from software throughout the contract term

## Term-Based vs Perpetual License Comparison

### Term-Based Software (Like Coder)

**Characteristics:**
- Customer licensed to use software for specific contract term (1-3 years typically)
- Software expires at end of term unless renewed
- Customer benefits throughout the contract period
- Both license and support are ongoing services

**ASC 606 Treatment:**
- **Performance Obligations**: (1) Term License - over time, (2) Support - over time
- **Revenue Recognition**: Both recognized ratably over contract term
- **Pattern**: Even revenue recognition each year
- **Rationale**: Customer simultaneously receives and consumes benefits

### Perpetual Software (Traditional)

**Characteristics:**
- Customer receives indefinite right to use software
- License doesn't expire (though support might)
- Customer gains control at point of delivery
- License and support are distinct obligations

**ASC 606 Treatment:**
- **Performance Obligations**: (1) Perpetual License - point in time, (2) Support - over time
- **Revenue Recognition**: License immediately, support over time
- **Pattern**: Front-loaded revenue in Year 1
- **Rationale**: Customer controls the license asset immediately

## Example Scenarios

### Example 1: Coder Term-Based License (Default)

**Contract Details:**
- Annual License SSP: $2,000
- Annual Support SSP: $1,000
- Contract Term: 3 years
- Contract Price: $12,000

**SSP Calculation:**
- License SSP: $2,000 × 3 = $6,000
- Support SSP: $1,000 × 3 = $3,000
- Total SSP: $9,000

**Allocation:**
- License: ($6,000 ÷ $9,000) × $12,000 = **$8,000** (66.67%)
- Support: ($3,000 ÷ $9,000) × $12,000 = **$4,000** (33.33%)

**Revenue Recognition (Term-Based):**

| Year | License | Support | Total | Cumulative |
|------|---------|---------|-------|------------|
| 1 | $2,667 | $1,333 | $4,000 | $4,000 |
| 2 | $2,667 | $1,333 | $4,000 | $8,000 |
| 3 | $2,666 | $1,334 | $4,000 | $12,000 |

**Monthly Recognition:**
- License: $222/month
- Support: $111/month
- **Total: $333/month**

### Example 2: Same Contract, Perpetual License

**Same SSP and Allocation as above, but different recognition pattern:**

**Revenue Recognition (Perpetual):**

| Year | License | Support | Total | Cumulative |
|------|---------|---------|-------|------------|
| 1 | $8,000 | $1,333 | $9,333 | $9,333 |
| 2 | $0 | $1,333 | $1,333 | $10,666 |
| 3 | $0 | $1,334 | $1,334 | $12,000 |

### Example 3: Enterprise Term-Based Contract

**Contract Details:**
- Annual License SSP: $5,000
- Annual Support SSP: $2,000
- Contract Term: 2 years
- Contract Price: $13,000

**SSP Calculation:**
- License SSP: $5,000 × 2 = $10,000
- Support SSP: $2,000 × 2 = $4,000
- Total SSP: $14,000

**Allocation:**
- License: ($10,000 ÷ $14,000) × $13,000 = **$9,286** (71.43%)
- Support: ($4,000 ÷ $14,000) × $13,000 = **$3,714** (28.57%)

**Revenue Recognition (Term-Based):**

| Year | License | Support | Total | Cumulative |
|------|---------|---------|-------|------------|
| 1 | $4,643 | $1,857 | $6,500 | $6,500 |
| 2 | $4,643 | $1,857 | $6,500 | $13,000 |

## ASC 606 Compliance for Term-Based Licenses

### Step 1: Identify the Contract
- Term-based software license + support agreement
- Fixed term with clear start/end dates
- Enforceable rights and obligations
- Commercial substance and probable collection

### Step 2: Identify Performance Obligations

**Term-Based License Analysis:**
- ✅ **Distinct**: Customer can benefit from license independently
- ✅ **Separable**: License is separately identifiable from support
- ✅ **Over Time**: Customer benefits throughout the term
- ❌ **Not Point in Time**: Customer doesn't gain perpetual control

**Support Services Analysis:**
- ✅ **Distinct**: Customer benefits from support independently
- ✅ **Over Time**: Customer receives and consumes benefits as provided
- ✅ **Stand-Ready**: Ongoing obligation throughout term

### Step 3: Determine Transaction Price
- Fixed contract amount (no variable consideration in basic case)
- Consider payment terms and financing components
- Evaluate for material rights or options

### Step 4: Allocate Transaction Price
- Use relative SSP method
- Annual SSPs × contract term = total SSPs
- Allocate proportionally based on relative SSPs

### Step 5: Recognize Revenue

**Term-Based License (Over Time Recognition):**
- Customer simultaneously receives and consumes benefits
- No alternative use to vendor (customer-specific rights)
- Enforceable right to payment for performance to date
- **Recognition Pattern**: Straight-line over contract term

**Support Services (Over Time Recognition):**
- Stand-ready performance obligation
- Customer receives benefits as services are provided
- **Recognition Pattern**: Straight-line over contract term

## Impact on Financial Statements

### Term-Based Model (Coder's Approach)
**Benefits:**
- Smoother, more predictable revenue recognition
- Better matches revenue with service delivery period
- Aligns with subscription-style business models
- Reduces revenue volatility

**Considerations:**
- Lower initial revenue recognition vs perpetual
- Requires careful contract term tracking
- May impact revenue growth metrics

### Perpetual Model (Traditional)
**Benefits:**
- Higher upfront revenue recognition
- Immediate value recognition for delivered licenses
- Traditional software industry pattern

**Considerations:**
- More volatile revenue patterns
- Front-loads revenue recognition
- May not reflect ongoing value delivery

## Industry Context

### Software-as-a-Service (SaaS)
- Typically recognized over time (subscription model)
- Customer accesses but doesn't control software
- Similar pattern to term-based licenses

### Traditional On-Premises Software
- Historically perpetual licenses (point in time)
- Support/maintenance recognized over time
- Front-loaded revenue recognition

### Modern On-Premises (Like Coder)
- Term-based licensing becoming more common
- Better aligns with customer value realization
- Provides more predictable revenue streams

## Best Practices for Term-Based Software

### Contract Documentation
1. **Clear Term Definition**: Specify exact start/end dates
2. **Usage Rights**: Define scope of license during term
3. **Support Obligations**: Detail included support services
4. **Renewal Terms**: Clarify renewal vs. new contract treatment

### SSP Determination
1. **Market Analysis**: Research competitive term-based pricing
2. **Historical Data**: Use actual renewal rates and pricing
3. **Component Pricing**: Separate license from support pricing
4. **Regular Updates**: Refresh SSP analysis annually

### Revenue Recognition Process
1. **Monthly Recognition**: Calculate monthly amounts for smooth reporting
2. **Term Tracking**: Monitor contract start/end dates carefully
3. **Modification Handling**: Process contract changes appropriately
4. **System Integration**: Automate calculations where possible

## Technical Implementation

### Calculator Features
- **License Type Toggle**: Switch between term-based and perpetual
- **Real-Time SSP**: Dynamic calculation of total SSPs
- **Visual Formulas**: See exact allocation methodology
- **Comparative Analysis**: Side-by-side term vs perpetual examples
- **Monthly Breakdowns**: Support financial planning needs

### Integration Options
- Standalone web application
- API for system integration
- Export capabilities for financial systems
- Audit trail documentation

---

**For Coder Teams:** This calculator is specifically designed to handle term-based software licensing scenarios. The default settings reflect typical Coder contract structures, but all parameters are adjustable for different deal sizes and terms.