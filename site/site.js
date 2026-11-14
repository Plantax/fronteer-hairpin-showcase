// Präsentationsseite: Texte (DE/EN), Zeichnungen aus echten Ergebnisdaten (data.js), Scroll-Animationen.
// Kein Framework, keine fremden Skripte, keine Netzwerkaufrufe: funktioniert auch per Doppelklick (file://).
const CONFIG = { contact: 'mailto:contact@fronteerlab.com' }          // z. B. 'mailto:name@example.org' oder ein Formular-Link; leer = Knopf bleibt verborgen

const T = {
  en: {
    skip: 'Skip to content', vid_pause: 'Pause animation', vid_play: 'Play animation',
    alt_screening: 'Screenshot of the generation app in the screening phase: spread-out starting shapes with their parameters on the left and the measured results on the right.',
    alt_optimization: 'Screenshot of the generation app in the optimization phase: proposals with prediction and measured result and the trade-off between length and clearance.',
    alt_result: 'Screenshot of the generation app showing the result: the selected pin and the complete basket of 36 hairpins.',
    alt_total: 'Screenshot of the complete stator in the generation app with key figures for all three baskets.',
    alt_stator: 'Rendering of the complete stator with three baskets of hairpins.',
    alt_mf_machine: 'Screenshot of the manufacturing app: machine view with wire spool, feed rollers, twist head, counter-holder, bending tool and cutter.',
    alt_mf_spring: 'Screenshot of the manufacturing app: the pin as designed without springback compensation, with the deviation shown in colour.',
    alt_mf_pin: 'Screenshot of the manufacturing app: the pin with the compensated program and the stress-strain curve.',
    nav_gen: 'Generation', ch1_h: 'Generation', ch1_p: 'Searches the shape space of the end winding and keeps the shortest pin that meets every requirement.',
    hm1_k: '01 · Generation', hm1_s: 'End-winding length · best of 96 variants · meets every requirement', hm2_k: '02 · Manufacturing', hm2_s: 'Largest distance from the target curve · 20 bends · springback compensated',
    mg_more: 'Technical description',
    mm_k: 'Method', mm_h: 'Three building blocks',
    mm1_h: 'Kinematics', mm1_p: 'Each step moves a local frame (t, u, b) along the wire: feed L, twist τ about t, head rotation ψ, then a bend by α about the die axis at radius R. The centreline is the chain of these rigid motions.', mm1_f: 'x = (L<sub>i</sub>, τ<sub>i</sub>, ψ<sub>i</sub>, α<sub>i</sub>), i = 1 … n',
    mm2_h: 'Optimization', mm2_p: 'The program minimizes the largest distance to the optimized centreline γ under the limits of the process. The maximum norm is approached by p-norm rounds (p = 8, 16) from a pool of start programs, with the number of bends n varied.', mm2_f: 'min<sub>x</sub> max<sub>s</sub> dist(c<sub>x</sub>(s), γ(s))<br>α ≤ 95°, |τ| ≤ 20°, R ≥ R<sub>min</sub>',
    mm3_h: 'Material and springback', mm3_p: 'Power-law hardening gives the stress–strain curve. The bending moment follows from the cross-section; unloading is elastic, so the pin springs back by a factor K. The program bends to α/K and is re-fitted.', mm3_f: 'σ = σ<sub>y</sub> (ε/ε<sub>y</sub>)<sup>n</sup> · M(κ) = ∫ σ z dA · Δκ = M/EI',
    ch2_h: 'Manufacturing', ch2_p: 'A forming program is fitted to the optimized centreline, with springback compensated. A rotary-draw bending process serves as the example; the approach is designed for other manufacturing processes as well.',
    mr1_k: 'Distance from the target curve', mr1_n: 'Largest distance of the manufactured pin from the optimized curve · 20 to 21 bends per pin · model values',
    mr2_k: 'What springback costs', mr2_n: 'Bars: distance with over-bending for the material · dashed: if the machine runs the design angles',
    mr3_k: 'Bends per pin', mr3_u: 'bends', mr3_n: '20 / 21 / 20 per basket · bend angle up to 95° · twist up to 20° per piece',
    ms_h: 'The app at work',
    mf1_h: 'From curve to bend program', mf1_p: 'The optimized 3D centreline becomes a sequence of feed, twist, head angle and bend. Colour shows where the manufactured pin leaves the target curve.',
    mf2_h: 'The program, step by step', mf2_p: 'The optimizer outputs feed, twist, head angle and bend for every step. A rotary-draw bending process serves as the example: the tool stands still, the pin moves.',
    mf3_h: 'What the wire goes through', mf3_p: 'A point travels along the stress-strain curve of the outer fibre while the wire is bent. The stress profile shows tension outside and compression inside.',
    mf4_h: 'Springback compensation', mf4_p: 'Ignoring springback adds up to about 9 mm over 20 bends. The method over-bends for the material and re-fits the entire program.',
    mg_h: 'Manufacturing app preview', mg_p: 'Screenshots of the manufacturing app for the three baskets: the optimized program, the process and the stress-strain curve. Material and process values are assumptions. The real app is available on request.',
    nav_modules: 'Modules', nav_mfg: 'Manufacturing', mod_eyebrow: 'Two modules', mod_h: 'From the best shape to a pin that can be made.', mod_label: 'Module',
    mod1_h: 'Hairpin generation', mod1_p: 'Finds the shortest end-winding shape that satisfies all requirements as constraints. Multi-objective Bayesian optimization on a Gaussian-process surrogate, every result verified in CAD.', mod1_l1: 'Gaussian-process surrogate with expected-improvement search', mod1_l3: 'Complete stator, basket by basket', mod1_cta: 'App preview',
    mod2_h: 'Manufacturing', mod2_p: 'Fits a forming program to the optimized 3D centreline: a minimax parameter fit under process limits, with springback from an elastic-plastic moment–curvature model.', mod2_l1: 'Minimax fit of feed, twist, head angle and bend to the 3D centreline', mod2_l2: 'Power-law hardening, moment–curvature relation, elastic unloading', mod2_l3: 'Compensation by re-fitting: 0.9 to 1.2 mm from the target instead of about 9 mm', mod2_cta: 'App preview', mod2_more: 'How it works',
    mod_note: 'Both modules use the same pin. Material and machine values in the manufacturing module are assumptions that stand in for the process data of a real line. The app pages are static previews (screenshots only), not working apps; they protect the content. Private access to both apps is available on request.',
    nav_how: 'How it works', nav_results: 'Results', nav_contact: 'Contact', nav_demo: 'Apps', nav_demo_m: 'Apps', cta_demo_m: 'Copy app link', desk_only_m: 'open on a computer', copied: 'Link copied ✓',
    eyebrow: 'Hairpin winding · end-winding optimization for electric motors', h1: 'The shortest hairpin<br>that meets every requirement.',
    lead: 'Every candidate shape is a real CAD model, measured against clearance, bend radius, installation space and insertion sequence. A machine-learning optimizer keeps the best one, and a second module turns it into a bend program that a process can run.',
    cta_demo: 'App preview', desk_only: 'screenshots only', cta_how: 'How it works',
    stat_len: 'End-winding length', stat_basket: 'Basket 1 · best of 96 variants', stat_ok: 'meets every requirement',
    statement: 'A hairpin must keep its distance from neighbouring conductors, respect the minimum bend radius, fit the installation space and be insertable basket by basket. <em>A short conductor is only of value if all of these requirements are met at the same time.</em>',
    ml: 'Machine learning',
    s1_h: 'Requirements first', s1_p: 'Slots, layers, conductor and installation space define the design space. Clearance, bend radius and insertion sequence are hard constraints.',
    s2_h: 'Systematic exploration', s2_p: 'A first screening spreads starting shapes across the design space. Each line is one shape: its design parameters (P) on the left, the measured result on the right.',
    s3_h: 'A model that learns', s3_p: 'After every measurement, a statistical model (Gaussian process) estimates how long any untried shape would be. The band is its uncertainty. The model error falls with every additional measurement (red to green).',
    s3_c: '<span>Gaussian process</span><span>surrogate model</span><span>uncertainty</span>',
    s4_h: 'Where to measure next?', s4_p: 'For every position the model computes the expected improvement: a tall bar means a better value than the best so far is likely there. The five highest peaks become the next five CAD evaluations, run in parallel.',
    s4_c: '<span>Bayesian optimization</span><span>expected improvement</span><span>parallel proposals</span>',
    s5_h: 'The map of the optimum', s5_p: 'Two design parameters, all others held constant. Contour lines show the expected conductor length in mm, the dark red area violates requirements. With every round the valley narrows towards the best value.',
    s5_c: '<span>constraint-aware</span><span>contour map</span><span>probability of feasibility</span>',
    s6_h: 'What makes a pin good', s6_p: 'Two goals pull against each other: short conductor, large clearance. A pin is outdated as soon as another one is shorter and has more clearance. What remains is the Pareto front: the pins nobody beats on both goals.',
    s6_c: '<span>multi-objective</span><span>Pareto front</span><span>dominance</span>',
    s7_h: 'One pin per basket', s7_p: 'A basket is the set of hairpins that is inserted together. The chosen shapes sit in the stator at the same height: three baskets, 36 hairpins each.',
    s7_c: '<span>multi-objective</span><span>Pareto front</span><span>dominated area</span>',
    r_h: 'Results at a glance',
    r_len_k: 'Conductor in the stator', r_len_n: 'All 108 hairpins including legs · copper mass of the conductors',
    r_pins_k: 'Hairpins in the stator', r_pins_u: 'hairpins', r_pins_n: '3 baskets × 36 slots, one chosen pin per basket',
    r_each_k: 'Conductor length per basket', r_each_n: 'End-winding length in mm · dashed: shortest valid pin without the common height',
    r_h_k: 'Common end-winding height', r_h_n: 'All baskets within half a millimetre · dashed: height without the specification from basket 3',
    r_t_k: 'Optimization time', r_t_u: 'min per basket, average', r_t_n: 'Per basket about 96 variants computed in CAD, minutes per run',
    r_v_k: 'Variants computed in CAD', r_v_u: 'variants in total', r_v_n: 'Each dot is one computed variant of the last run, filled dots meet every requirement',
    bk: 'Basket',
    shots_h: 'Full transparency during the computation',
    sh1_h: 'Screening', sh1_p: 'Fifteen spread-out starting shapes, each measured in CAD. Green lines meet every requirement, red ones do not.',
    sh2_h: 'Optimization', sh2_p: 'Proposals with prediction and measured result, the trade-off curve between length and clearance, and where the search converges.',
    sh3_h: 'Result', sh3_p: 'Select any pin and the complete basket of 36 hairpins is generated from it. Height, clearance and bend margin at a glance.',
    d_h: 'App preview', d_p: 'The app pages show screenshots of the real applications: the three baskets with their phases and the complete stator. They are static and not working apps; this protects the content. A private access to the live apps is available on request.',
    d_access: 'Get in touch', d_more: 'A personal research project', foot: 'Results shown are from saved optimization runs.',
    t_gap: 'clearance', t_bend: 'bend radius', t_space: 'installation space', t_pitch: 'pitch', slots: 'slots',
    ax_len: 'length', ax_gap: 'clearance', ax_ang: 'angle', length_mm: 'conductor length (mm) · shorter is better →', gap_mm: 'clearance to neighbour (mm) · larger is better ↑', front: 'trade-off front',
    gp_x: 'shape parameter →', gp_y: 'conductor length', gp_est: 'model estimate', gp_unc: 'uncertainty', gp_meas: 'measured', gp_acq: 'Where does the next measurement pay off?', gp_nm: 'measured: ', gp_prop: '5 proposals',
    map_round: 'Round', map_pins: 'measured pins',
    fr_n: 'optimal trade-offs', fr_short: 'shortest', hv: 'reached area', round_l: 'round', pv_variant: 'Variant', pv_ok: 'feasible', pv_bad: 'violates requirements',
    par: 'Parameter',
    par_cap: 'P = design parameter (shape)',
    par_cap2: 'One line = one computed pin',
    gp_best: 'best value so far',
    gp_err: 'model error',
    gp_acq_sub: 'tall bar = a better value is likely here',
    gp_toy: 'principle · one parameter',
    map_sub: 'Expected conductor length in mm (contour lines)',
    map_ok: 'feasible',
    map_bad: 'violates',
    map_best: 'best pin',
    map_infeas: 'requirements violated',
    map_opt: 'expected optimum',
    fr_ideal: '★ ideal: short & large clearance',
    fr_done: 'requirement achievable',
    fr_open: 'not yet achievable',
    fr_ok: 'optimal',
    fr_bad: 'violates',
    fr_new: 'improvement',
    fr_line: 'best trade-off',
    sb_h: 'The Pareto front',
    sb_p: 'Two goals pull against each other: short conductor, large clearance. A pin is outdated as soon as another one is shorter and has more clearance. Each new pin can push the front outwards; the range of achievable requirements grows, and the optimizer searches exactly where it can grow further.',
    sb_c: '<span>Pareto front</span><span>dominance</span><span>hypervolume</span>',
    sc_h: 'Why the Pareto front matters',
    sc_p: 'There is no single best hairpin. Every point on the front is the shortest pin for a given clearance. The optimizer delivers all optimal trade-offs; engineering picks the one that fits the requirement. Try it: move the minimum clearance.',
    sc_c: '<span>trade-off</span><span>decision support</span>',
    fr_front: 'Pareto front',
    fr_dom: 'outdated: a better pin exists',
    fr_ex: 'shorter and more clearance',
    fr_spark: 'achievable range',
    fr_old: 'outdated',
    fr_first: 'first feasible pin',
    fr_len_same: 'shorter, same clearance',
    fr_gap_same: 'more clearance, same length',
    fr_newzone: 'new range reached',
    fr_pins: 'pins',
    fr_opt: 'optimal',
    fr_sub_a: 'only the front matters',
    pick_req: 'required clearance',
    pick_res: 'shortest pin',
    pick_gap: 'clearance',
    pick_l: 'Minimum clearance',
    o_h: 'Next: the complete winding',
    o_p: 'End-winding optimization is the first building block. The same method now extends to the remaining parts of the winding.',
    o_tag: 'Planned',
    o1_h: 'Twist side',
    o1_p: 'The weld side of the stator. The free leg ends are twisted so that the winding scheme closes and neighbouring ends can be welded. Optimized for clearance, twist angle and installation space.',
    o2_h: 'Busbars',
    o2_p: 'Interconnection of the phases and the neutral point via busbars: conductor routing, clearances and a compact build height.',
    o3_h: 'Special pins',
    o3_p: 'Terminal pins (I-pins), jumper and bridge pins complete the winding where standard hairpins cannot connect directly: phase terminals, neutral point, parallel paths.',
    tab_suite: "Suite",
    tab_winding: "Winding scheme",
    tab_forming: "Forming side",
    tab_twist: "Twist side",
    tab_busbar: "Busbar",
    tab_mfg: "Manufacturing",
    su_eyebrow: "Hairpin stator · process chain",
    su_h1: "From winding scheme<br>to finished stator.",
    su_lead: "One project file connects five modules: winding scheme, forming side, twist side with special legs, busbar and manufacturing. Every station checks its own rules and hands its result to the next one, up to the assembled stator.",
    st1: "Winding scheme",
    st1_d: "stator, conductor order",
    st2: "Forming side",
    st2_d: "crown shape per basket",
    st3: "Twist side",
    st3_d: "twist of the regular legs",
    st4: "Special legs",
    st4_d: "shortened twists, jumpers",
    st5: "Busbar",
    st5_d: "jumpers, neutral, phases",
    st6: "Manufacturing",
    st6_d: "bend program, sequence",
    cta_modules: "The five modules",
    su_status_k: "Status",
    su_status: "Feasibility study",
    su_status_p: "– consistent in computation from the winding scheme to the stator; tooling, cooling and housing assumptions are unconfirmed, nothing is tested experimentally.",
    mod_eyebrow: "Five modules",
    mod_h: "One project, from the winding scheme to a stator that can be made.",
    mod_winding_h: "Winding scheme",
    mod_winding_p: "Defines stator, conductor order and connections and checks them. The link between all other modules.",
    mod_winding_l1: "Regular forming side, all special connections on the twist side",
    mod_winding_l2: "Top view, development, branches, 3D and working principle",
    mod_winding_l3: "Import and export in common exchange formats",
    mod_twist_h: "Twist side and special legs",
    mod_twist_p: "Sets the twist of the regular legs and simulates the process; shortened twists, jumper ends and terminals are checked for collisions.",
    mod_twist_l1: "Twist geometry per layer with live checks",
    mod_twist_l2: "Process simulation with tools and axis values",
    mod_twist_l3: "Every special leg collision-free",
    mod_busbar_h: "Busbar",
    mod_busbar_p: "Routes jumpers, neutral bar and phase leads on their own levels above the weld tips and checks clearance, current and heating.",
    mod_busbar_l1: "Jumper routes on series sub-levels",
    mod_busbar_l2: "Clearance and creepage for 800 V",
    mod_busbar_l3: "Cross-section per bar from current and heating",
    sus_h: "The suite at work",
    sus1_h: "The finished stator",
    sus1_p: "Lamination stack, forming side, twist side with all special legs and the busbar in one picture, with the end results of every station.",
    sus2_h: "Manufacturing sequence",
    sus2_p: "All steps from wire to stator in swim lanes, with intermediate tests, rules for the order and the cycle time per step.",
    sus3_h: "Busbar concept",
    sus3_p: "Jumpers, neutral bar and phase leads in the top view, at bar width, with every clearance checked.",
    su_dh: "Suite preview",
    cw_h: "Winding scheme",
    cw_p: "Stator, conductor order and twist-side connections of the project. The forming side stays fully regular; phase changes, basket changes, terminals and neutral point sit on the twist side.",
    wr1_k: "Winding factor",
    wr1_n: "36 slots, 4 poles, 6 layers · reference stator from the literature",
    wr2_k: "Twist-side connections",
    wr2_n: "regular welds · welds with step 8 · jumpers",
    wr3_k: "Checks",
    wr3_u: "rules",
    wr3_n: "W-1 to W-8: phase symmetry, closed paths, forming side regular, geometry",
    ws1_h: "Top view of the twist side",
    ws1_p: "Phases, current direction, welds, jumpers and free legs. Clicking a conductor highlights its branch.",
    ws3_h: "Development",
    ws3_p: "All slots and layers unrolled, with the path of each phase.",
    cw_dh: "Winding scheme in the suite",
    cw_dp: "The station hands stator, conductor order and bill of materials to all other modules.",
    ct_h: "Twist side",
    ct_p: "The weld side of the stator. The regular legs are twisted per layer in opposite directions; special legs (shortened twists, jumper ends, terminal and neutral legs) are checked for collisions in the same model.",
    tr1_k: "Tip height above the stack",
    tr1_n: "all layers · bend rule and tool clearance met",
    tr2_k: "Special legs",
    tr2_u: "collision-free",
    tr2_n: "72 shortened twists, 30 jumper ends, 6 terminal and neutral legs · smallest separation +0.07 mm",
    tr3_k: "Checks of the twist side",
    tr3_n: "Penetration, bore, bend rule, equal tip height, tool access",
    ts1_h: "Setting the twist",
    ts1_p: "Separation step, S-bend slope and inclination of the innermost layer; every change is recomputed in under a second.",
    ts2_h: "Special legs",
    ts2_p: "All 108 special legs in their slots; the worst pair is marked. One inclination value frees them all.",
    ct_dh: "Twist side in the suite",
    ct_dp: "Twist side and special legs are two stations of the suite and share one model.",
    cb_h: "Busbar",
    cb_p: "The interconnection above the weld tips: jumpers on their own series level, neutral bar outside the winding, phase leads to the terminal. Every bar is checked for clearance, current density and heating.",
    br1_k: "Series sub-levels",
    br1_u: "levels",
    br1_n: "15 jumpers routed without conflicts · build height above the tips",
    br2_k: "Clearance and creepage",
    br2_n: "800 V: clearance between parts · creepage at the terminal; all values are project parameters",
    br3_k: "Rated current and heating",
    br3_n: "per phase · surface load of the bar relative to the hairpin conductor",
    bs1_h: "Top view with routes",
    bs1_p: "Tips by role, jumper routes at bar width, neutral bar and phase leads to the terminal; on the right parameters, checks B-1 to B-7 and the cross-sections.",
    cb_dh: "Busbar in the suite",
    cb_dp: "The busbar parameters are stored in the project; the twist side reads the leg lengths from them.",
    mp_k: "From wire to stator",
    mp_h: "The whole manufacturing sequence",
    mp_p: "Bending is one step of many. The module lays out all steps up to the finished stator, checks their order against rules from the literature and estimates the cycle time per step.",
    pr1_k: "Steps and intermediate tests",
    pr1_u: "steps",
    pr1_u2: "tests",
    pr1_n: "Four templates, freely reorderable · pin measurement, insulation test, weld inspection",
    pr2_k: "Line cycle time",
    pr2_n: "one station per step · with stations sized to the target · vendor figures and assumptions",
    pr3_k: "Finished stator, axial length",
    pr3_n: "Forming side + stack + twist side + busbar",
    ps_h: "Sequence and result",
    ps1_h: "Process sequence",
    ps1_p: "Swim lanes from wire to stator; each card shows quantities from the project and the occupancy against the target cycle time.",
    ps2_h: "Finished stator",
    ps2_p: "All stations assembled in one picture, with dimensions, checks per station, material and cycle time.",
    hm1_k: "Forming side · Generation",
    hm2_k: "Manufacturing",
    o_tag: "Next",
    o_h: "Beyond the feasibility study",
    o_p: "The chain is consistent in computation. The next steps replace assumptions with data from a real project.",
    o1_h: "Tool and machine data",
    o1_p: "Twist tooling, bending machine and line layout from a real project instead of assumptions.",
    o2_h: "Busbar in CAD",
    o2_p: "The busbar concept as a parametric CAD model, like the twist side, with lugs and terminal block.",
    o3_h: "Cooling and validation",
    o3_p: "Confirmed cooling values for the bars and comparison with measured parts.",
    alt_su_full_stator: "Screenshot of the suite: the finished stator with all stations and the end results.",
    alt_sp_m_stator: "Screenshot of the suite: the finished stator in copper.",
    alt_sp_m_stator_meaning: "Screenshot of the suite: the finished stator coloured by layer, role and phase.",
    alt_sp_m_seq: "Screenshot of the suite: manufacturing sequence in swim lanes with cycle times.",
    alt_sp_b_all: "Screenshot of the suite: busbar top view with jumper routes and checks.",
    alt_sp_b_l2: "Screenshot of the suite: busbar with one series level highlighted.",
    alt_sp_w_top: "Screenshot of the winding scheme: top view of the twist side.",
    alt_sp_w_principle: "Screenshot of the winding scheme: working principle.",
    alt_sp_w_developed: "Screenshot of the winding scheme: development.",
    alt_sp_w_branches: "Screenshot of the winding scheme: branches.",
    alt_sp_w_3d: "Screenshot of the winding scheme in 3D.",
    alt_sp_t_einstellen: "Screenshot of the twist side: settings and 3D view.",
    alt_sp_s_worst: "Screenshot of the special legs check.",
    alt_sp_t_schema: "Screenshot of the twist side: winding scheme view.",
    d_h: "In the suite preview",
    mg_h: "Manufacturing in the suite preview",
    aw_k: "Approach",
    aw_h: "Three ideas behind the winding scheme",
    aw1_h: "Regular forming side",
    aw1_p: "All 108 pins share one crown span of 9 slots – one shape per basket, three in total. Phase changes, basket changes, terminals and the neutral point move to the twist side, where welds and jumpers take them on.",
    aw1_f: "y = Q / 2p = 9 · q = Q / (2p·m) = 3 · 3 crown shapes",
    aw2_h: "Connections from rules",
    aw2_p: "The conductor order follows a few rules: outbound with descending slots, return in the same layer pair. Every twist-side connection follows from them – regular welds, step-8 welds, jumpers between baskets and the free legs.",
    aw2_f: "54 + 36 welds · 15 jumpers · 6 free legs → 216 legs",
    aw3_h: "Checked before it is handed over",
    aw3_p: "Eight rules check symmetry, closed paths, the regular forming side and geometry. The winding factor comes from the phasor sum; the voltage between radial neighbours gives a first insulation estimate.",
    aw3_f: "k<sub>w</sub> = |Σ e<sup>jα<sub>i</sub></sup>| / N · U<sub>nb</sub> / U<sub>ph</sub>",
    wp1_k: "Winding factor from the slot star",
    wp1_n: "Electrical angle 20° per slot; solid: positive zone, dashed: negative zone of a phase",
    wp2_k: "Legs on the twist side",
    wp2_n: "Every leg has exactly one partner: a weld, a jumper or the busbar",
    wp3_k: "Largest voltage between neighbours",
    wp3_n: "Ohmic estimate per phase voltage · all eight checks passed",
    pl_star: "20° el. · 36 slots · p = 2",
    pl_c1: "regular welds",
    pl_c2: "welds step 8",
    pl_c3: "jumpers",
    pl_c4: "free legs",
    pl_legs: "legs",
    pl_rule: "outbound: descending slot · return: same layer pair",
    at_k: "Approach",
    at_h: "Three ideas behind the twist side",
    at1_h: "Geometric twist model",
    at1_p: "Each leg is an S-bend at the slot exit, an inclined section and a vertical tip. Neighbouring layers turn in opposite directions by half the coil pitch; the inclination per layer follows from an equal tip height.",
    at1_f: "α = (y/2) · 2π/Q = 45° · h<sub>tip</sub> = f(θ<sub>ref</sub>, Δw, slope)",
    at2_h: "Collision as geometry",
    at3_h: "Process with tools",
    at3_p: "Twist crowns, support fingers and counter-holder are part of the model. The simulation steps through intermediate states and writes the axis values as a process sheet.",
    at3_f: "state(s) = (separate, twist), s ∈ [0, 1] → axis values over time",
    tp1_k: "Tip height over the inclination",
    tp1_n: "One parameter sets the height of all layers; every point is a full twist side",
    tp2_k: "Smallest separation of the special legs",
    tp2_n: "Below the dashed line two legs touch. A slightly steeper innermost layer frees all of them.",
    tp3_k: "Inclination per layer",
    tp3_n: "Outer layers flatter, inner layers steeper – all tips at the same height",
    pl_tip: "tip height (mm)",
    pl_sep: "separation (mm)",
    pl_layers: "layers",
    pl_axes: "intermediate states → axis values",
    ab_k: "Approach",
    ab_h: "Three ideas behind the busbar",
    ab1_h: "Levels with clearance",
    ab1_p: "Jumpers, neutral bar and phase leads each get their own level above the weld tips. Levels are separated by the clearance of the voltage class; the terminal needs clearance and creepage.",
    ab1_f: "z<sub>i+1</sub> = z<sub>i</sub> + t + c · c = 5.6 mm (800 V) · terminal 9.1 / 12 mm",
    ab2_h: "Routes instead of straight lines",
    ab2_p: "Each jumper runs on its own radius with Z- or U-shaped transitions. Routes are spread over series sub-levels until no conflict with tips, bars or legs passing through is left.",
    ab2_f: "fewest levels with dist(route, obstacle) ≥ c",
    ab3_h: "Current and heat relative to the conductor",
    ab3_p: "Cross-sections follow from the rated current. The surface load is compared with the hairpin conductor itself, so a bar is never warmer than the winding under the same cooling.",
    ab3_f: "J = I/A ≤ J<sub>cond</sub> · q = I²ρ/(A·U) ≤ q<sub>cond</sub>",
    bp1_k: "Conflicts over the number of sub-levels",
    bp1_n: "Directly on the tips even four levels leave 27 conflicts; raised by the clearance, four levels are free",
    bp2_k: "Build height above the tips",
    bp2_n: "Four series levels, neutral bar and phase leads, each separated by the clearance c",
    bp3_k: "Surface load relative to the conductor",
    bp3_n: "Current density per bar at 400 A; dashed: density of the hairpin conductor",
    pl_conf: "conflicts",
    pl_levels: "series sub-levels",
    pl_ontips: "on the tips",
    pl_raised: "raised by c",
    pl_tips: "weld tips",
    pl_s1: "series 1",
    pl_s2: "series 2",
    pl_s3: "series 3",
    pl_s4: "series 4",
    pl_n: "neutral",
    pl_p: "phases",
    pl_jumper: "jumper",
    pl_neutral: "neutral",
    pl_phase: "phase lead",
    su_dp: "One preview for the whole suite: the real interface of every station – tabs, inspector, 3D views – running on the saved results. Nothing is computed and nothing is saved; there is no server behind it.",
    d_p: "The suite preview runs the real interface on the finished runs of this module: switch baskets, review each phase, cut through the stator. Nothing is computed.",
    mg_p: "The suite preview contains the process sequence, the finished stator and the bending program for all three baskets – pin, machine and the pin as designed. Material and process values are assumptions.",
    mod_note: "All modules read the same project file. Material, machine, cooling and cycle-time values are assumptions or published vendor figures, not measured data of a real line. The suite preview shows saved results only.",
    desk_only: "saved results",
    embed_full: "Full screen",
    cta_demo: "Open the suite preview",
    mod1_cta: "Open the suite preview",
    mod2_cta: "Open the suite preview",
    cta_suite_view: "Open the suite preview",
    nav_demo: "Open the suite preview",
    cta_suite: "Open the suite preview",
    embed_open: "Open the suite preview",
    wst_s1_h: "Slot star first",
    wst_s1_p: "36 slots, four poles: neighbouring slots are 20° electrical apart. Three slots form a phase belt, and how well their voltages add up is the winding factor.",
    wst_s2_h: "One crown for all",
    wst_s2_p: "With a span of 9 slots every pin in a basket has the same crown on the forming side – three shapes for 108 pins. That keeps the bending programs and the tooling small.",
    wst_s3_h: "Specials move to the twist side",
    wst_s3_p: "Phase changes, basket changes, terminals and the neutral point are not special pins but connections on the twist side: regular welds, welds with step 8, jumpers and free legs.",
    wst_s4_h: "Checked, then handed over",
    wst_s4_p: "Eight rules check the scheme. The project file then hands stator, conductor order and bill of materials to every other module.",
    pl_crowns: "y = 9 · one crown shape per basket",
    pl_fl_proj: "project file",
    pl_fl_form: "forming side",
    pl_fl_twist: "twist side",
    pl_fl_bus: "busbar",
    pl_fl_mfg: "manufacturing",
    wq1_k: "Winding factor",
    wq1_n: "Distribution factor k<sub>d</sub> (q = 3, 20°) times pitch factor k<sub>p</sub> (full pitch)",
    pl_kd: "k<sub>d</sub>",
    pl_kp: "k<sub>p</sub>",
    wq2_k: "Legs on the twist side",
    wq2_n: "Every leg has exactly one partner: a weld, a jumper or the busbar",
    wq3_k: "Checks passed",
    wq3_n: "W-1 to W-8: phase symmetry, closed paths, regular forming side, geometry",
    ws_h: "The module at work",
    ws2_h: "Working principle",
    ws2_p: "Current distribution and rotating field, shown schematically to explain the scheme – not a simulation.",
    tst_s1_h: "One leg, three parts",
    tst_s1_p: "Each leg leaves the slot with an S-bend, runs on an inclined section and ends in a vertical tip. The tip angle is fixed by the winding scheme: half the coil pitch.",
    tst_s2_h: "Every layer its own slope",
    tst_s2_p: "Outer layers have a longer way and lie flatter, inner ones steeper – chosen so that every tip ends at the same height.",
    tst_s3_h: "One parameter sets the height",
    tst_s3_p: "The inclination of the innermost layer θ<sub>ref</sub> carries all other layers along. Steeper means higher tips and more copper.",
    tst_s4_h: "The special legs decide",
    tst_s4_p: "Shortened twists and standing ends touch below about 38°. From 38.3° every special leg is free – so the twist side takes the smallest inclination that frees them all.",
    tq1_k: "Free length per layer",
    tq1_n: "Wire length from the stack face to the tip; tip height 76.2 mm for all layers",
    pl_L1: "L1",
    pl_L2: "L2",
    pl_L3: "L3",
    pl_L4: "L4",
    pl_L5: "L5",
    pl_L6: "L6",
    tq2_k: "Special legs",
    tq2_n: "Smallest separation +0.069 mm, no pair below zero",
    pl_legsfree: "free",
    pl_r_red: "shortened",
    pl_r_jump: "jumper ends",
    pl_r_term: "terminals",
    pl_r_neut: "neutral",
    tq3_k: "Checks passed",
    tq3_n: "Penetration, bore, bend rule, equal tip height, weld partners, tool access",
    ts_h: "The module at work",
    bst_s1_h: "A level for each part",
    bst_s1_p: "Jumpers lie on series levels right above the tips, the neutral bar and the phase leads above them. Each level is separated by the clearance c of the voltage class.",
    bst_s2_h: "Routes around the obstacles",
    bst_s2_p: "A jumper runs on its own radius and changes radius with a Z- or U-shaped step. Tips, other bars and legs passing through are obstacles.",
    bst_s3_h: "As many levels as needed",
    bst_s3_p: "Directly on the tips 269 conflicts remain with one level and still 27 with four. Raised by the clearance, four levels are free – the build height grows to 51.6 mm.",
    bst_s4_h: "Never warmer than the winding",
    bst_s4_p: "At 400 A every bar stays below the current density of the hairpin conductor, and its surface load is 0.75 times that of the conductor.",
    bq1_k: "Height of the levels",
    bq1_n: "Top edge of every level above the weld tips, in mm",
    bq2_k: "Remaining conflicts",
    bq2_n: "Four series levels: directly on the tips versus raised by the clearance",
    pl_q_on: "on the tips",
    pl_q_up: "raised by c",
    bq3_k: "Surface load relative to the conductor",
    bq3_n: "Loss per surface I²ρ/(A·U) of each bar divided by that of the hairpin conductor",
    pl_cond: "conductor",
    bs_h: "The module at work",
    bs2_h: "Cross-section and heating",
    bs2_p: "Each bar type gets its own width and thickness; steady-state and overload temperatures are estimated from the cooling assumptions.",
    at2_p: "Every leg is checked for clearance against all its neighbours – including the 108 special legs with shortened twists and standing ends. A negative distance means two conductors touch.",
    at2_f: "d ≥ 0 for every pair of neighbouring legs",
    mod1_l2: "Constraints as geometry: clearance, bend radius, installation space, insertion order",
    ar_gh: "GitHub repository",
    ar_lang: "Language",
    ar_gap: "Minimum clearance",
    ar_mods: "Modules",
    ar_chain: "Process chain",
    ar_scroll: "Scroll down",
    ar_suite: "Fronteer Hairpin suite preview",
  },
  de: {
    skip: 'Zum Inhalt springen', vid_pause: 'Animation anhalten', vid_play: 'Animation abspielen',
    alt_screening: 'Screenshot der Generierungs-App in der Screening-Phase: verteilte Startformen mit ihren Parametern links und den gemessenen Ergebnissen rechts.',
    alt_optimization: 'Screenshot der Generierungs-App in der Optimierungsphase: Vorschläge mit Vorhersage und Messergebnis sowie der Zielkonflikt zwischen Länge und Abstand.',
    alt_result: 'Screenshot der Generierungs-App mit dem Ergebnis: der gewählte Pin und der komplette Korb mit 36 Hairpins.',
    alt_total: 'Screenshot des Gesamtstators in der Generierungs-App mit Kennzahlen aller drei Körbe.',
    alt_stator: 'Darstellung des kompletten Stators mit drei Körben aus Hairpins.',
    alt_mf_machine: 'Screenshot der Fertigungs-App: Maschinenansicht mit Drahtspule, Vorschubrollen, Drehkopf, Gegenhalter, Biegewerkzeug und Messer.',
    alt_mf_spring: 'Screenshot der Fertigungs-App: der Pin wie entworfen ohne Rückfederungsausgleich, die Abweichung ist farbig dargestellt.',
    alt_mf_pin: 'Screenshot der Fertigungs-App: der Pin mit dem ausgeglichenen Programm und der Spannungs-Dehnungs-Kurve.',
    nav_gen: 'Generierung', ch1_h: 'Generierung', ch1_p: 'Durchsucht den Formraum des Wickelkopfs und behält den kürzesten Pin, der jede Vorgabe erfüllt.',
    hm1_k: '01 · Generierung', hm1_s: 'Leiterlänge im Wickelkopf · beste von 96 Varianten · erfüllt alle Vorgaben', hm2_k: '02 · Fertigung', hm2_s: 'Größter Abstand zur Zielkurve · 20 Biegungen · Rückfederung kompensiert',
    mg_more: 'Technische Beschreibung',
    mm_k: 'Methode', mm_h: 'Drei Bausteine',
    mm1_h: 'Kinematik', mm1_p: 'Jeder Schritt bewegt ein lokales Dreibein (t, u, b) entlang des Drahts: Vorschub L, Verdrehung τ um t, Kopfdrehung ψ, dann eine Biegung um α um die Matrizenachse mit Radius R. Die Mittellinie ist die Kette dieser Starrkörperbewegungen.', mm1_f: 'x = (L<sub>i</sub>, τ<sub>i</sub>, ψ<sub>i</sub>, α<sub>i</sub>), i = 1 … n',
    mm2_h: 'Optimierung', mm2_p: 'Das Programm minimiert den größten Abstand zur optimierten Mittellinie γ unter den Prozessgrenzen. Die Maximumnorm wird über p-Norm-Runden (p = 8, 16) aus einem Pool von Startprogrammen angenähert, die Biegungszahl n wird variiert.', mm2_f: 'min<sub>x</sub> max<sub>s</sub> dist(c<sub>x</sub>(s), γ(s))<br>α ≤ 95°, |τ| ≤ 20°, R ≥ R<sub>min</sub>',
    mm3_h: 'Werkstoff und Rückfederung', mm3_p: 'Potenzgesetz-Verfestigung liefert die Spannungs-Dehnungs-Kurve. Das Biegemoment folgt aus dem Querschnitt; die Entlastung ist elastisch, der Pin federt daher um einen Faktor K zurück. Das Programm biegt auf α/K und wird neu angepasst.', mm3_f: 'σ = σ<sub>y</sub> (ε/ε<sub>y</sub>)<sup>n</sup> · M(κ) = ∫ σ z dA · Δκ = M/EI',
    ch2_h: 'Fertigung', ch2_p: 'Ein Umformprogramm wird an die optimierte Mittellinie angepasst, mit kompensierter Rückfederung. Als Beispiel dient ein Rotationszug-Biegeprozess; der Ansatz ist auch für andere Fertigungsverfahren ausgelegt.',
    mr1_k: 'Abstand zur Zielkurve', mr1_n: 'Größter Abstand des gefertigten Pins zur optimierten Kurve · 20 bis 21 Biegungen je Pin · Modellwerte',
    mr2_k: 'Was Rückfederung kostet', mr2_n: 'Balken: Abstand mit Überbiegen für den Werkstoff · gestrichelt: wenn die Maschine die Entwurfswinkel fährt',
    mr3_k: 'Biegungen je Pin', mr3_u: 'Biegungen', mr3_n: '20 / 21 / 20 je Korb · Biegewinkel bis 95° · Verdrehung bis 20° je Stück',
    ms_h: 'Die App bei der Arbeit',
    mf1_h: 'Von der Kurve zum Biegeprogramm', mf1_p: 'Die optimierte 3D-Mittellinie wird zu einer Folge aus Vorschub, Verdrehung, Kopfstellung und Biegung. Die Farbe zeigt, wo der gefertigte Pin von der Zielkurve abweicht.',
    mf2_h: 'Das Programm, Schritt für Schritt', mf2_p: 'Der Optimierer liefert für jeden Schritt Vorschub, Verdrehung, Kopfstellung und Biegung. Als Beispiel dient ein Rotationszug-Biegeprozess: Das Werkzeug steht, der Pin bewegt sich.',
    mf3_h: 'Was der Draht durchläuft', mf3_p: 'Beim Biegen wandert ein Punkt auf der Spannungs-Dehnungs-Kurve der Außenfaser. Das Spannungsprofil zeigt Zug außen und Druck innen.',
    mf4_h: 'Rückfederung kompensiert', mf4_p: 'Wer die Rückfederung ignoriert, landet über 20 Biegungen bei etwa 9 mm Abweichung. Die Methode überbiegt werkstoffgerecht und passt das gesamte Programm neu an.',
    mg_h: 'Vorschau der Fertigungs-App', mg_p: 'Screenshots der Fertigungs-App für die drei Körbe: das optimierte Programm, der Prozess und die Spannungs-Dehnungs-Kurve. Werkstoff- und Prozesswerte sind Annahmen. Die echte App ist auf Anfrage verfügbar.',
    nav_modules: 'Module', nav_mfg: 'Fertigung', mod_eyebrow: 'Zwei Module', mod_h: 'Von der besten Form zum Pin, der sich fertigen lässt.', mod_label: 'Modul',
    mod1_h: 'Hairpin-Generierung', mod1_p: 'Findet die kürzeste Wickelkopfform, die alle Vorgaben als Nebenbedingungen erfüllt. Mehrzielige Bayes\'sche Optimierung auf einem Gauß-Prozess-Ersatzmodell, jedes Ergebnis im CAD geprüft.', mod1_l1: 'Gauß-Prozess-Ersatzmodell mit Expected-Improvement-Suche', mod1_l3: 'Kompletter Stator, Korb für Korb', mod1_cta: 'App-Vorschau',
    mod2_h: 'Fertigung', mod2_p: 'Passt ein Umformprogramm an die optimierte 3D-Mittellinie an: Minimax-Parameteranpassung unter Prozessgrenzen, Rückfederung aus einem elastisch-plastischen Moment-Krümmungs-Modell.', mod2_l1: 'Minimax-Anpassung von Vorschub, Verdrehung, Kopfstellung und Biegung an die 3D-Mittellinie', mod2_l2: 'Potenzgesetz-Verfestigung, Moment-Krümmungs-Beziehung, elastische Entlastung', mod2_l3: 'Kompensation durch Neuanpassung: 0,9 bis 1,2 mm zur Zielkurve statt etwa 9 mm', mod2_cta: 'App-Vorschau', mod2_more: 'So funktioniert es',
    mod_note: 'Beide Module verwenden denselben Pin. Werkstoff- und Maschinenwerte im Fertigungsmodul sind Annahmen und stehen für die Prozessdaten einer realen Anlage. Die App-Seiten sind statische Vorschauen (nur Screenshots) und keine funktionierenden Apps; sie schützen die Inhalte. Ein privater Zugang zu beiden Apps ist auf Anfrage möglich.',
    nav_how: 'So funktioniert es', nav_results: 'Ergebnisse', nav_contact: 'Kontakt', nav_demo: 'Apps', nav_demo_m: 'Apps', cta_demo_m: 'App-Link kopieren', desk_only_m: 'am Computer öffnen', copied: 'Link kopiert ✓',
    eyebrow: 'Hairpin-Wicklung · Wickelkopf-Optimierung für Elektromotoren', h1: 'Der kürzeste Hairpin,<br>der alle Anforderungen erfüllt.',
    lead: 'Jede Kandidatenform ist ein echtes CAD-Modell und wird gegen Abstand, Biegeradius, Bauraum und Fügereihenfolge gemessen. Ein Machine-Learning-Optimierer behält die beste, ein zweites Modul macht daraus ein Biegeprogramm, das ein Prozess fahren kann.',
    cta_demo: 'App-Vorschau', desk_only: 'nur Screenshots', cta_how: 'So funktioniert es',
    stat_len: 'Leiterlänge im Wickelkopf', stat_basket: 'Korb 1 · beste von 96 Varianten', stat_ok: 'hält alle Vorgaben',
    statement: 'Ein Hairpin muss Abstand zu benachbarten Leitern halten, den Mindestbiegeradius einhalten, in den Bauraum passen und korbweise gefügt werden können. <em>Ein kurzer Leiter ist nur dann von Wert, wenn alle Anforderungen gleichzeitig erfüllt sind.</em>',
    ml: 'Machine Learning',
    s1_h: 'Zuerst die Anforderungen', s1_p: 'Nuten, Lagen, Leiter und Bauraum definieren den Entwurfsraum. Abstand, Biegeradius und Fügereihenfolge sind harte Nebenbedingungen.',
    s2_h: 'Systematische Erkundung', s2_p: 'Ein erstes Screening verteilt Startformen über den Entwurfsraum. Jede Linie ist eine Form: links ihre Entwurfsparameter (P), rechts das gemessene Ergebnis.',
    s3_h: 'Ein Modell, das lernt', s3_p: 'Nach jeder Messung schätzt ein statistisches Modell (Gauß-Prozess), wie lang jede noch nicht gerechnete Form wäre. Das Band ist seine Unsicherheit. Der Modellfehler sinkt mit jeder weiteren Messung (Rot zu Grün).',
    s3_c: '<span>Gauß-Prozess</span><span>Ersatzmodell</span><span>Unsicherheit</span>',
    s4_h: 'Wo als Nächstes messen?', s4_p: 'Für jede Stelle berechnet das Modell die erwartete Verbesserung: Eine hohe Säule bedeutet, dass dort ein besserer Wert als der bisher beste wahrscheinlich ist. Die fünf höchsten Spitzen werden die nächsten fünf CAD-Auswertungen, parallel gerechnet.',
    s4_c: '<span>Bayes\'sche Optimierung</span><span>Expected Improvement</span><span>parallele Vorschläge</span>',
    s5_h: 'Die Karte des Optimums', s5_p: 'Zwei Entwurfsparameter, alle übrigen konstant gehalten. Höhenlinien zeigen die erwartete Leiterlänge in mm, der dunkelrote Bereich verletzt Vorgaben. Mit jeder Runde verengt sich das Tal auf den besten Wert.',
    s5_c: '<span>vorgabenbewusst</span><span>Höhenlinienkarte</span><span>Zulässigkeitswahrscheinlichkeit</span>',
    s6_h: 'Was ein guter Pin ist', s6_p: 'Zwei Ziele ziehen gegeneinander: kurzer Leiter, großer Abstand. Ein Pin ist überholt, sobald ein anderer kürzer ist und mehr Abstand hat. Übrig bleibt die Pareto-Front: die Pins, die in beiden Zielen niemand übertrifft.',
    s6_c: '<span>Mehrzieloptimierung</span><span>Pareto-Front</span><span>Dominanz</span>',
    s7_h: 'Ein Pin je Korb', s7_p: 'Ein Korb ist die Gruppe von Hairpins, die gemeinsam gefügt wird. Die gewählten Formen sitzen gleich hoch im Stator: drei Körbe mit je 36 Hairpins.',
    s7_c: '<span>Mehrzieloptimierung</span><span>Pareto-Front</span><span>dominierte Fläche</span>',
    r_h: 'Ergebnisse auf einen Blick',
    r_len_k: 'Leiter im Stator', r_len_n: 'Alle 108 Hairpins inklusive Schenkel · Kupfermasse der Leiter',
    r_pins_k: 'Hairpins im Stator', r_pins_u: 'Hairpins', r_pins_n: '3 Körbe × 36 Nuten, je Korb ein gewählter Pin',
    r_each_k: 'Leiterlänge je Korb', r_each_n: 'Länge im Wickelkopf in mm · gestrichelt: kürzester gültiger Pin ohne gemeinsame Höhe',
    r_h_k: 'Gemeinsame Wickelkopfhöhe', r_h_n: 'Alle Körbe innerhalb eines halben Millimeters · gestrichelt: Höhe ohne die Vorgabe von Korb 3',
    r_t_k: 'Dauer der Optimierung', r_t_u: 'min je Korb, Durchschnitt', r_t_n: 'Je Korb etwa 96 im CAD gerechnete Varianten, Minuten je Lauf',
    r_v_k: 'Im CAD gerechnete Varianten', r_v_u: 'Varianten insgesamt', r_v_n: 'Jeder Punkt ist eine gerechnete Variante des letzten Laufs, gefüllte Punkte erfüllen alle Vorgaben',
    bk: 'Korb',
    shots_h: 'Volle Transparenz während der Berechnung',
    sh1_h: 'Screening', sh1_p: 'Fünfzehn verteilte Startformen, jede im CAD gemessen. Grüne Linien halten alle Vorgaben, rote nicht.',
    sh2_h: 'Optimierung', sh2_p: 'Vorschläge mit Vorhersage und gemessenem Ergebnis, die Kompromisskurve zwischen Länge und Abstand und der Bereich, in dem die Suche konvergiert.',
    sh3_h: 'Ergebnis', sh3_p: 'Jeden Pin auswählen: Der vollständige Korb aus 36 Hairpins wird daraus erzeugt. Höhe, Abstand und Biegereserve auf einen Blick.',
    d_h: 'App-Vorschau', d_p: 'Die App-Seiten zeigen Screenshots der echten Anwendungen: die drei Körbe mit ihren Phasen und den kompletten Stator. Sie sind statisch und keine funktionierenden Apps; das schützt die Inhalte. Ein privater Zugang zu den echten Apps ist auf Anfrage möglich.',
    d_access: 'Kontakt aufnehmen', d_more: 'Ein privates Forschungsprojekt', foot: 'Gezeigt werden Ergebnisse gespeicherter Optimierungsläufe.',
    t_gap: 'Abstand zum Nachbarn', t_bend: 'Biegeradius', t_space: 'Bauraum', t_pitch: 'Schrittweite', slots: 'Nuten',
    ax_len: 'Länge', ax_gap: 'Abstand', ax_ang: 'Winkel', length_mm: 'Leiterlänge (mm) · kürzer ist besser →', gap_mm: 'Abstand zum Nachbarn (mm) · größer ist besser ↑', front: 'Kompromissfront',
    gp_x: 'Formparameter →', gp_y: 'Leiterlänge', gp_est: 'Modellschätzung', gp_unc: 'Unsicherheit', gp_meas: 'gemessen', gp_acq: 'Wo lohnt sich die nächste Messung?', gp_nm: 'gemessen: ', gp_prop: '5 Vorschläge',
    map_round: 'Runde', map_pins: 'gemessene Pins',
    fr_n: 'optimale Kompromisse', fr_short: 'kürzester', hv: 'erreichte Fläche', round_l: 'Runde', pv_variant: 'Variante', pv_ok: 'zulässig', pv_bad: 'verletzt Vorgaben',
    p_none: '',
    par: 'Parameter',
    par_cap: 'P = Entwurfsparameter (Form)',
    par_cap2: 'Eine Linie = ein gerechneter Pin',
    gp_best: 'bisher bester Wert',
    gp_err: 'Modellfehler',
    gp_acq_sub: 'hohe Säule = hier ist ein besserer Wert wahrscheinlich',
    gp_toy: 'Prinzip · ein Parameter',
    map_sub: 'Erwartete Leiterlänge in mm (Höhenlinien)',
    map_ok: 'zulässig',
    map_bad: 'verletzt',
    map_best: 'bester Pin',
    map_infeas: 'Vorgaben verletzt',
    map_opt: 'erwartetes Optimum',
    fr_ideal: '★ ideal: kurz & großer Abstand',
    fr_done: 'Anforderung erfüllbar',
    fr_open: 'noch nicht erreichbar',
    fr_ok: 'optimal',
    fr_bad: 'verletzt',
    fr_new: 'Verbesserung',
    fr_line: 'bester Kompromiss',
    sb_h: 'Die Pareto-Front',
    sb_p: 'Zwei Ziele ziehen gegeneinander: kurzer Leiter, großer Abstand. Ein Pin ist überholt, sobald ein anderer kürzer ist und mehr Abstand hat. Jeder neue Pin kann die Front nach außen schieben; der Bereich erfüllbarer Anforderungen wächst, und der Optimierer sucht genau dort, wo er weiter wachsen kann.',
    sb_c: '<span>Pareto-Front</span><span>Dominanz</span><span>Hypervolumen</span>',
    sc_h: 'Warum die Pareto-Front zählt',
    sc_p: 'Es gibt nicht den einen besten Hairpin. Jeder Punkt der Front ist der kürzeste Pin für einen bestimmten Abstand. Der Optimierer liefert alle optimalen Kompromisse; die Konstruktion wählt den, der zur Anforderung passt. Zum Ausprobieren den Mindestabstand verschieben.',
    sc_c: '<span>Zielkonflikt</span><span>Entscheidungsgrundlage</span>',
    fr_front: 'Pareto-Front',
    fr_dom: 'überholt: ein besserer Pin existiert',
    fr_ex: 'kürzer und mehr Abstand',
    fr_spark: 'erfüllbarer Bereich',
    fr_old: 'überholt',
    fr_first: 'erster zulässiger Pin',
    fr_len_same: 'kürzer bei gleichem Abstand',
    fr_gap_same: 'mehr Abstand bei gleicher Länge',
    fr_newzone: 'neuer Bereich erreicht',
    fr_pins: 'Pins',
    fr_opt: 'optimal',
    fr_sub_a: 'nur die Front zählt',
    pick_req: 'geforderter Abstand',
    pick_res: 'kürzester Pin',
    pick_gap: 'Abstand',
    pick_l: 'Mindestabstand',
    o_h: 'Als Nächstes: die komplette Wicklung',
    o_p: 'Die Wickelkopf-Optimierung ist der erste Baustein. Dieselbe Methode wird nun auf die übrigen Teile der Wicklung ausgeweitet.',
    o_tag: 'Geplant',
    o1_h: 'Twistseite',
    o1_p: 'Die Schweißseite des Stators. Die freien Schenkelenden werden verdrillt, damit sich das Wicklungsschema schließt und benachbarte Enden geschweißt werden können. Optimiert wird nach Abstand, Twistwinkel und Bauraum.',
    o2_h: 'Busbars',
    o2_p: 'Verschaltung der Phasen und des Sternpunkts über Busbars: Leiterführung, Abstände und eine kompakte Bauhöhe.',
    o3_h: 'Sonderpins',
    o3_p: 'Anschlusspins (I-Pins), Jumper- und Brückenpins vervollständigen die Wicklung dort, wo Standard-Hairpins nicht direkt verbinden: Phasenanschlüsse, Sternpunkt, parallele Pfade.',
    tab_suite: "Suite",
    tab_winding: "Wickelschema",
    tab_forming: "S-Schlagseite",
    tab_twist: "Twistseite",
    tab_busbar: "Busbar",
    tab_mfg: "Fertigung",
    su_eyebrow: "Hairpin-Stator · Prozesskette",
    su_h1: "Vom Wickelschema<br>zum fertigen Stator.",
    su_lead: "Eine Projektdatei verbindet fünf Module: Wickelschema, S-Schlagseite, Twistseite mit Sonderbeinen, Busbar und Fertigung. Jede Station prüft ihre eigenen Regeln und gibt ihr Ergebnis an die nächste weiter, bis zum zusammengesetzten Stator.",
    st1: "Wickelschema",
    st1_d: "Stator, Leiterfolge",
    st2: "S-Schlagseite",
    st2_d: "Kronenform je Korb",
    st3: "Twistseite",
    st3_d: "Twist der Regelbeine",
    st4: "Sonderbeine",
    st4_d: "gekürzte Twists, Jumper",
    st5: "Busbar",
    st5_d: "Jumper, Sternpunkt, Phasen",
    st6: "Fertigung",
    st6_d: "Biegeprogramm, Folge",
    cta_modules: "Die fünf Module",
    su_status_k: "Status",
    su_status: "Machbarkeitsstudie",
    su_status_p: "– rechnerisch durchgängig vom Wickelschema bis zum Stator; Werkzeug-, Kühl- und Gehäuseannahmen sind nicht bestätigt, nichts ist experimentell geprüft.",
    mod_eyebrow: "Fünf Module",
    mod_h: "Ein Projekt, vom Wickelschema bis zum fertigbaren Stator.",
    mod_winding_h: "Wickelschema",
    mod_winding_p: "Legt Stator, Leiterfolge und Verbindungen fest und prüft sie. Das Bindeglied zwischen allen anderen Modulen.",
    mod_winding_l1: "S-Schlagseite regelmäßig, alle Sonderverbindungen auf der Twistseite",
    mod_winding_l2: "Draufsicht, Abwicklung, Zweige, 3D und Funktionsprinzip",
    mod_winding_l3: "Import und Export in gängigen Austauschformaten",
    mod_twist_h: "Twistseite und Sonderbeine",
    mod_twist_p: "Stellt den Twist der Regelbeine ein und simuliert den Prozess; gekürzte Twists, Jumperenden und Anschlüsse werden auf Kollision geprüft.",
    mod_twist_l1: "Twistgeometrie je Lage mit Live-Prüfung",
    mod_twist_l2: "Prozesssimulation mit Werkzeugen und Achswerten",
    mod_twist_l3: "Jedes Sonderbein kollisionsfrei",
    mod_busbar_h: "Busbar",
    mod_busbar_p: "Führt Jumper, Sternpunktschiene und Phasenzuleitungen auf eigenen Ebenen über den Schweißspitzen und prüft Abstände, Strom und Erwärmung.",
    mod_busbar_l1: "Jumperbahnen auf Serien-Teilebenen",
    mod_busbar_l2: "Luft- und Kriechstrecken für 800 V",
    mod_busbar_l3: "Querschnitt je Schiene aus Strom und Erwärmung",
    sus_h: "Die Suite bei der Arbeit",
    sus1_h: "Der fertige Stator",
    sus1_p: "Blechpaket, S-Schlagseite, Twistseite mit allen Sonderbeinen und die Busbar in einem Bild, dazu die Endergebnisse jeder Station.",
    sus2_h: "Fertigungsfolge",
    sus2_p: "Alle Schritte vom Draht bis zum Stator als Schwimmbahnen, mit Zwischenprüfungen, Regeln für die Reihenfolge und der Taktzeit je Schritt.",
    sus3_h: "Busbar-Konzept",
    sus3_p: "Jumper, Sternpunktschiene und Phasenzuleitungen in der Draufsicht, in Schienenbreite, jeder Abstand geprüft.",
    su_dh: "Suite-Vorschau",
    cw_h: "Wickelschema",
    cw_p: "Stator, Leiterfolge und Verbindungen der Twistseite des Projekts. Die S-Schlagseite bleibt vollständig regelmäßig; Phasenwechsel, Korbwechsel, Anschlüsse und Sternpunkt liegen auf der Twistseite.",
    wr1_k: "Wicklungsfaktor",
    wr1_n: "36 Nuten, 4 Pole, 6 Lagen · Referenzstator aus der Literatur",
    wr2_k: "Verbindungen der Twistseite",
    wr2_n: "Regelschweißungen · Schweißungen mit Schritt 8 · Jumper",
    wr3_k: "Prüfungen",
    wr3_u: "Regeln",
    wr3_n: "W-1 bis W-8: Phasensymmetrie, geschlossene Pfade, S-Schlagseite regelmäßig, Geometrie",
    ws1_h: "Draufsicht auf die Twistseite",
    ws1_p: "Phasen, Stromrichtung, Schweißungen, Jumper und freie Beine. Ein Klick auf einen Leiter hebt seinen Zweig hervor.",
    ws3_h: "Abwicklung",
    ws3_p: "Alle Nuten und Lagen abgewickelt, mit dem Weg jeder Phase.",
    cw_dh: "Wickelschema in der Suite",
    cw_dp: "Die Station übergibt Stator, Leiterfolge und Stückliste an alle anderen Module.",
    ct_h: "Twistseite",
    ct_p: "Die Schweißseite des Stators. Die Regelbeine werden je Lage gegenläufig getwistet; Sonderbeine (gekürzte Twists, Jumperenden, Anschluss- und Sternpunktbeine) werden im selben Modell auf Kollision geprüft.",
    tr1_k: "Spitzenhöhe über dem Paket",
    tr1_n: "alle Lagen · Biegeregel und Werkzeugfreiheit erfüllt",
    tr2_k: "Sonderbeine",
    tr2_u: "kollisionsfrei",
    tr2_n: "72 gekürzte Twists, 30 Jumperenden, 6 Anschluss- und Sternpunktbeine · kleinste Trennung +0,07 mm",
    tr3_k: "Prüfungen der Twistseite",
    tr3_n: "Durchdringung, Bohrung, Biegeregel, gleiche Spitzenhöhe, Werkzeugzugang",
    ts1_h: "Twist einstellen",
    ts1_p: "Separierschritt, Schräge der S-Biegung und Neigung der innersten Lage; jede Änderung ist in unter einer Sekunde neu gerechnet.",
    ts2_h: "Sonderbeine",
    ts2_p: "Alle 108 Sonderbeine in ihren Nuten; das schlechteste Paar ist markiert. Ein Neigungswert macht alle frei.",
    ct_dh: "Twistseite in der Suite",
    ct_dp: "Twistseite und Sonderbeine sind zwei Stationen der Suite und teilen sich ein Modell.",
    cb_h: "Busbar",
    cb_p: "Die Verschaltung über den Schweißspitzen: Jumper auf eigener Serienebene, Sternpunktschiene außerhalb der Wicklung, Phasenzuleitungen zur Klemme. Jede Schiene ist auf Abstand, Stromdichte und Erwärmung geprüft.",
    br1_k: "Serien-Teilebenen",
    br1_u: "Ebenen",
    br1_n: "15 Jumper konfliktfrei geführt · Bauhöhe über den Spitzen",
    br2_k: "Luft- und Kriechstrecke",
    br2_n: "800 V: Luftstrecke zwischen Teilen · Kriechstrecke an der Klemme; alle Werte sind Projektparameter",
    br3_k: "Nennstrom und Erwärmung",
    br3_n: "je Phase · Oberflächenbelastung der Schiene relativ zum Hairpin-Leiter",
    bs1_h: "Draufsicht mit Bahnen",
    bs1_p: "Spitzen nach Rolle, Jumperbahnen in Schienenbreite, Sternpunktschiene und Zuleitungen zur Klemme; rechts Parameter, Prüfungen B-1 bis B-7 und die Querschnitte.",
    cb_dh: "Busbar in der Suite",
    cb_dp: "Die Busbar-Parameter stehen im Projekt; die Twistseite liest daraus die Beinlängen.",
    mp_k: "Vom Draht zum Stator",
    mp_h: "Die ganze Fertigungsfolge",
    mp_p: "Biegen ist ein Schritt von vielen. Das Modul legt alle Schritte bis zum fertigen Stator an, prüft ihre Reihenfolge gegen Regeln aus der Literatur und schätzt die Taktzeit je Schritt.",
    pr1_k: "Schritte und Zwischenprüfungen",
    pr1_u: "Schritte",
    pr1_u2: "Prüfungen",
    pr1_n: "Vier Vorlagen, frei umstellbar · Pinvermessung, Isolationsprüfung, Nahtprüfung",
    pr2_k: "Linientakt",
    pr2_n: "eine Station je Schritt · mit auf den Zieltakt ausgelegten Stationen · Herstellerangaben und Annahmen",
    pr3_k: "Fertiger Stator, axiale Länge",
    pr3_n: "S-Schlagseite + Paket + Twistseite + Busbar",
    ps_h: "Folge und Ergebnis",
    ps1_h: "Prozessfolge",
    ps1_p: "Schwimmbahnen vom Draht bis zum Stator; jede Karte zeigt Mengen aus dem Projekt und die Belegung gegenüber dem Zieltakt.",
    ps2_h: "Fertiger Stator",
    ps2_p: "Alle Stationen in einem Bild zusammengesetzt, mit Maßen, Prüfungen je Station, Material und Taktzeit.",
    hm1_k: "S-Schlagseite · Generierung",
    hm2_k: "Fertigung",
    o_tag: "Als Nächstes",
    o_h: "Über die Machbarkeitsstudie hinaus",
    o_p: "Die Kette ist rechnerisch durchgängig. Die nächsten Schritte ersetzen Annahmen durch Daten eines realen Projekts.",
    o1_h: "Werkzeug- und Maschinendaten",
    o1_p: "Twistwerkzeug, Biegemaschine und Linienaufbau aus einem realen Projekt statt Annahmen.",
    o2_h: "Busbar im CAD",
    o2_p: "Das Busbar-Konzept als parametrisches CAD-Modell wie die Twistseite, mit Laschen und Klemme.",
    o3_h: "Kühlung und Abgleich",
    o3_p: "Bestätigte Kühlwerte für die Schienen und Vergleich mit gemessenen Teilen.",
    alt_su_full_stator: "Screenshot der Suite: der fertige Stator mit allen Stationen und den Endergebnissen.",
    alt_sp_m_stator: "Screenshot der Suite: der fertige Stator in Kupfer.",
    alt_sp_m_stator_meaning: "Screenshot der Suite: der fertige Stator nach Lage, Rolle und Phase eingefärbt.",
    alt_sp_m_seq: "Screenshot der Suite: Fertigungsfolge als Schwimmbahnen mit Taktzeiten.",
    alt_sp_b_all: "Screenshot der Suite: Busbar-Draufsicht mit Jumperbahnen und Prüfungen.",
    alt_sp_b_l2: "Screenshot der Suite: Busbar mit hervorgehobener Serienebene.",
    alt_sp_w_top: "Screenshot des Wickelschemas: Draufsicht auf die Twistseite.",
    alt_sp_w_principle: "Screenshot des Wickelschemas: Funktionsprinzip.",
    alt_sp_w_developed: "Screenshot des Wickelschemas: Abwicklung.",
    alt_sp_w_branches: "Screenshot des Wickelschemas: Zweige.",
    alt_sp_w_3d: "Screenshot des Wickelschemas in 3D.",
    alt_sp_t_einstellen: "Screenshot der Twistseite: Einstellungen und 3D-Ansicht.",
    alt_sp_s_worst: "Screenshot der Prüfung der Sonderbeine.",
    alt_sp_t_schema: "Screenshot der Twistseite: Ansicht Wickelschema.",
    d_h: "In der Suite-Vorschau",
    mg_h: "Fertigung in der Suite-Vorschau",
    aw_k: "Ansatz",
    aw_h: "Drei Ideen hinter dem Wickelschema",
    aw1_h: "Regelmäßige S-Schlagseite",
    aw1_p: "Alle 108 Pins haben dieselbe Kronenweite von 9 Nuten – eine Form je Korb, drei insgesamt. Phasenwechsel, Korbwechsel, Anschlüsse und Sternpunkt wandern auf die Twistseite, dort übernehmen Schweißungen und Jumper.",
    aw1_f: "y = Q / 2p = 9 · q = Q / (2p·m) = 3 · 3 Kronenformen",
    aw2_h: "Verbindungen aus Regeln",
    aw2_p: "Die Leiterfolge folgt wenigen Regeln: Hinweg mit absteigenden Nuten, Rückweg im selben Lagenpaar. Daraus ergibt sich jede Verbindung der Twistseite – Regelschweißungen, Schweißungen mit Schritt 8, Jumper zwischen den Körben und die freien Beine.",
    aw2_f: "54 + 36 Schweißungen · 15 Jumper · 6 freie Beine → 216 Beine",
    aw3_h: "Geprüft, bevor es weitergeht",
    aw3_p: "Acht Regeln prüfen Symmetrie, geschlossene Pfade, regelmäßige S-Schlagseite und Geometrie. Der Wicklungsfaktor folgt aus der Zeigersumme, die Spannung zwischen radialen Nachbarn gibt eine erste Abschätzung für die Isolation.",
    aw3_f: "k<sub>w</sub> = |Σ e<sup>jα<sub>i</sub></sup>| / N · U<sub>nb</sub> / U<sub>Str</sub>",
    wp1_k: "Wicklungsfaktor aus dem Nutstern",
    wp1_n: "Elektrischer Winkel 20° je Nut; durchgezogen: positive Zone, gestrichelt: negative Zone einer Phase",
    wp2_k: "Beine auf der Twistseite",
    wp2_n: "Jedes Bein hat genau einen Partner: eine Schweißung, einen Jumper oder die Busbar",
    wp3_k: "Größte Spannung zwischen Nachbarn",
    wp3_n: "Ohmsche Abschätzung je Strangspannung · alle acht Prüfungen bestanden",
    pl_star: "20° el. · 36 Nuten · p = 2",
    pl_c1: "Regelschweißungen",
    pl_c2: "Schweißungen Schritt 8",
    pl_c3: "Jumper",
    pl_c4: "freie Beine",
    pl_legs: "Beine",
    pl_rule: "Hinweg: absteigende Nut · Rückweg: gleiches Lagenpaar",
    at_k: "Ansatz",
    at_h: "Drei Ideen hinter der Twistseite",
    at1_h: "Geometrisches Twistmodell",
    at1_p: "Jedes Bein besteht aus einer S-Biegung am Nutaustritt, einem schrägen Stück und einer senkrechten Spitze. Nachbarlagen drehen gegenläufig um die halbe Spulenweite; die Neigung je Lage folgt aus gleicher Spitzenhöhe.",
    at1_f: "α = (y/2) · 2π/Q = 45° · h<sub>Spitze</sub> = f(θ<sub>ref</sub>, Δw, Schräge)",
    at2_h: "Kollision als Geometrie",
    at3_h: "Prozess mit Werkzeugen",
    at3_p: "Twistkronen, Stützfinger und Gegenhalter gehören zum Modell. Die Simulation läuft durch die Zwischenstände und schreibt die Achswerte als Prozessblatt.",
    at3_f: "Zustand(s) = (Separieren, Twist), s ∈ [0, 1] → Achswerte über der Zeit",
    tp1_k: "Spitzenhöhe über der Neigung",
    tp1_n: "Ein Parameter setzt die Höhe aller Lagen; jeder Punkt ist eine vollständige Twistseite",
    tp2_k: "Kleinste Trennung der Sonderbeine",
    tp2_n: "Unter der gestrichelten Linie berühren sich zwei Beine. Eine etwas steilere innerste Lage macht alle frei.",
    tp3_k: "Neigung je Lage",
    tp3_n: "Außen flacher, innen steiler – alle Spitzen auf gleicher Höhe",
    pl_tip: "Spitzenhöhe (mm)",
    pl_sep: "Trennung (mm)",
    pl_layers: "Lagen",
    pl_axes: "Zwischenstände → Achswerte",
    ab_k: "Ansatz",
    ab_h: "Drei Ideen hinter der Busbar",
    ab1_h: "Ebenen mit Luftstrecke",
    ab1_p: "Jumper, Sternpunktschiene und Phasenzuleitungen bekommen je eine eigene Ebene über den Schweißspitzen. Zwischen den Ebenen liegt die Luftstrecke der Spannungsklasse; die Klemme braucht Luft- und Kriechstrecke.",
    ab1_f: "z<sub>i+1</sub> = z<sub>i</sub> + t + c · c = 5,6 mm (800 V) · Klemme 9,1 / 12 mm",
    ab2_h: "Bahnen statt Geraden",
    ab2_p: "Jeder Jumper läuft auf eigenem Radius mit Z- oder U-förmigen Übergängen. Die Bahnen werden auf Serien-Teilebenen verteilt, bis kein Konflikt mit Spitzen, Schienen oder durchlaufenden Beinen bleibt.",
    ab2_f: "wenigste Ebenen mit Abstand(Bahn, Hindernis) ≥ c",
    ab3_h: "Strom und Wärme relativ zum Leiter",
    ab3_p: "Die Querschnitte folgen aus dem Nennstrom. Die Oberflächenbelastung wird mit dem Hairpin-Leiter selbst verglichen: Bei gleicher Kühlung wird eine Schiene nie wärmer als die Wicklung.",
    ab3_f: "J = I/A ≤ J<sub>Leiter</sub> · q = I²ρ/(A·U) ≤ q<sub>Leiter</sub>",
    bp1_k: "Konflikte über der Zahl der Teilebenen",
    bp1_n: "Direkt auf den Spitzen bleiben selbst mit vier Ebenen 27 Konflikte; um die Luftstrecke angehoben sind vier Ebenen frei",
    bp2_k: "Bauhöhe über den Spitzen",
    bp2_n: "Vier Serienebenen, Sternpunktschiene und Phasenzuleitungen, jeweils um die Luftstrecke c getrennt",
    bp3_k: "Oberflächenbelastung relativ zum Leiter",
    bp3_n: "Stromdichte je Schiene bei 400 A; gestrichelt: Stromdichte des Hairpin-Leiters",
    pl_conf: "Konflikte",
    pl_levels: "Serien-Teilebenen",
    pl_ontips: "auf den Spitzen",
    pl_raised: "um c angehoben",
    pl_tips: "Schweißspitzen",
    pl_s1: "Serie 1",
    pl_s2: "Serie 2",
    pl_s3: "Serie 3",
    pl_s4: "Serie 4",
    pl_n: "Sternpunkt",
    pl_p: "Phasen",
    pl_jumper: "Jumper",
    pl_neutral: "Sternpunkt",
    pl_phase: "Zuleitung",
    su_dp: "Eine Vorschau für die ganze Suite: die echte Oberfläche jeder Station – Reiter, Inspector, 3D-Ansichten – auf den gespeicherten Ergebnissen. Gerechnet und gespeichert wird nichts, dahinter steht kein Server.",
    d_p: "Die Suite-Vorschau zeigt die echte Oberfläche mit den fertigen Läufen dieses Moduls: Körbe wechseln, jede Phase ansehen, den Stator aufschneiden. Gerechnet wird nichts.",
    mg_p: "Die Suite-Vorschau enthält Fertigungsfolge, fertigen Stator und das Biegeprogramm aller drei Körbe – Pin, Maschine und den Pin wie entworfen. Werkstoff- und Prozesswerte sind Annahmen.",
    mod_note: "Alle Module lesen dieselbe Projektdatei. Werkstoff-, Maschinen-, Kühl- und Taktwerte sind Annahmen oder veröffentlichte Herstellerangaben, keine Messdaten einer realen Linie. Die Suite-Vorschau zeigt nur gespeicherte Ergebnisse.",
    desk_only: "gespeicherte Ergebnisse",
    embed_full: "Vollbild",
    cta_demo: "Suite-Vorschau öffnen",
    mod1_cta: "Suite-Vorschau öffnen",
    mod2_cta: "Suite-Vorschau öffnen",
    cta_suite_view: "Suite-Vorschau öffnen",
    nav_demo: "Suite-Vorschau öffnen",
    cta_suite: "Suite-Vorschau öffnen",
    embed_open: "Suite-Vorschau öffnen",
    wst_s1_h: "Zuerst der Nutstern",
    wst_s1_p: "36 Nuten, vier Pole: Nachbarnuten liegen 20° elektrisch auseinander. Drei Nuten bilden eine Phasenzone, und wie gut sich ihre Spannungen addieren, ist der Wicklungsfaktor.",
    wst_s2_h: "Eine Krone für alle",
    wst_s2_p: "Mit 9 Nuten Weite hat jeder Pin eines Korbs auf der S-Schlagseite dieselbe Krone – drei Formen für 108 Pins. Das hält Biegeprogramme und Werkzeuge klein.",
    wst_s3_h: "Sonderfälle wandern auf die Twistseite",
    wst_s3_p: "Phasenwechsel, Korbwechsel, Anschlüsse und Sternpunkt sind keine Sonderpins, sondern Verbindungen auf der Twistseite: Regelschweißungen, Schweißungen mit Schritt 8, Jumper und freie Beine.",
    wst_s4_h: "Geprüft, dann übergeben",
    wst_s4_p: "Acht Regeln prüfen das Schema. Danach übergibt die Projektdatei Stator, Leiterfolge und Stückliste an alle anderen Module.",
    pl_crowns: "y = 9 · eine Kronenform je Korb",
    pl_fl_proj: "Projektdatei",
    pl_fl_form: "S-Schlagseite",
    pl_fl_twist: "Twistseite",
    pl_fl_bus: "Busbar",
    pl_fl_mfg: "Fertigung",
    wq1_k: "Wicklungsfaktor",
    wq1_n: "Zonenfaktor k<sub>d</sub> (q = 3, 20°) mal Sehnungsfaktor k<sub>p</sub> (ungesehnt)",
    pl_kd: "k<sub>d</sub>",
    pl_kp: "k<sub>p</sub>",
    wq2_k: "Beine auf der Twistseite",
    wq2_n: "Jedes Bein hat genau einen Partner: eine Schweißung, einen Jumper oder die Busbar",
    wq3_k: "Prüfungen bestanden",
    wq3_n: "W-1 bis W-8: Phasensymmetrie, geschlossene Pfade, regelmäßige S-Schlagseite, Geometrie",
    ws_h: "Das Modul bei der Arbeit",
    ws2_h: "Funktionsprinzip",
    ws2_p: "Stromverteilung und Drehfeld, schematisch zur Erklärung des Schemas – keine Simulation.",
    tst_s1_h: "Ein Bein, drei Teile",
    tst_s1_p: "Jedes Bein verlässt die Nut mit einer S-Biegung, läuft auf einem schrägen Stück und endet in einer senkrechten Spitze. Den Spitzenwinkel legt das Wickelschema fest: die halbe Spulenweite.",
    tst_s2_h: "Jede Lage ihre Neigung",
    tst_s2_p: "Außenlagen haben den längeren Weg und liegen flacher, Innenlagen steiler – so gewählt, dass alle Spitzen auf gleicher Höhe enden.",
    tst_s3_h: "Ein Parameter setzt die Höhe",
    tst_s3_p: "Die Neigung der innersten Lage θ<sub>ref</sub> nimmt alle anderen Lagen mit. Steiler heißt höhere Spitzen und mehr Kupfer.",
    tst_s4_h: "Die Sonderbeine entscheiden",
    tst_s4_p: "Gekürzte Twists und stehende Enden berühren sich unterhalb von etwa 38°. Ab 38,3° ist jedes Sonderbein frei – die Twistseite nimmt die kleinste Neigung, die alle freigibt.",
    tq1_k: "Freie Länge je Lage",
    tq1_n: "Drahtlänge von der Paketstirn bis zur Spitze; Spitzenhöhe 76,2 mm für alle Lagen",
    pl_L1: "L1",
    pl_L2: "L2",
    pl_L3: "L3",
    pl_L4: "L4",
    pl_L5: "L5",
    pl_L6: "L6",
    tq2_k: "Sonderbeine",
    tq2_n: "Kleinste Trennung +0,069 mm, kein Paar unter null",
    pl_legsfree: "frei",
    pl_r_red: "gekürzt",
    pl_r_jump: "Jumperenden",
    pl_r_term: "Anschlüsse",
    pl_r_neut: "Sternpunkt",
    tq3_k: "Prüfungen bestanden",
    tq3_n: "Durchdringung, Bohrung, Biegeregel, gleiche Spitzenhöhe, Schweißpartner, Werkzeugzugang",
    ts_h: "Das Modul bei der Arbeit",
    bst_s1_h: "Eine Ebene je Teil",
    bst_s1_p: "Jumper liegen auf Serienebenen direkt über den Spitzen, Sternpunktschiene und Phasenzuleitungen darüber. Jede Ebene ist um die Luftstrecke c der Spannungsklasse getrennt.",
    bst_s2_h: "Bahnen um die Hindernisse",
    bst_s2_p: "Ein Jumper läuft auf eigenem Radius und wechselt ihn mit einem Z- oder U-förmigen Schritt. Spitzen, andere Schienen und durchlaufende Beine sind Hindernisse.",
    bst_s3_h: "So viele Ebenen wie nötig",
    bst_s3_p: "Direkt auf den Spitzen bleiben mit einer Ebene 269 Konflikte, mit vier noch 27. Um die Luftstrecke angehoben sind vier Ebenen frei – die Bauhöhe wächst auf 51,6 mm.",
    bst_s4_h: "Nie wärmer als die Wicklung",
    bst_s4_p: "Bei 400 A bleibt jede Schiene unter der Stromdichte des Hairpin-Leiters, und ihre Oberflächenbelastung liegt beim 0,75-Fachen des Leiters.",
    bq1_k: "Höhe der Ebenen",
    bq1_n: "Oberkante jeder Ebene über den Schweißspitzen in mm",
    bq2_k: "Verbleibende Konflikte",
    bq2_n: "Vier Serienebenen: direkt auf den Spitzen gegenüber um die Luftstrecke angehoben",
    pl_q_on: "auf den Spitzen",
    pl_q_up: "um c angehoben",
    bq3_k: "Oberflächenbelastung relativ zum Leiter",
    bq3_n: "Verlust je Oberfläche I²ρ/(A·U) jeder Schiene geteilt durch den des Hairpin-Leiters",
    pl_cond: "Leiter",
    bs_h: "Das Modul bei der Arbeit",
    bs2_h: "Querschnitt und Erwärmung",
    bs2_p: "Jede Schienenart bekommt eigene Breite und Dicke; Beharrungs- und Überlasttemperaturen werden mit den Kühlannahmen abgeschätzt.",
    at2_p: "Jedes Bein wird gegen alle Nachbarn auf Abstand geprüft – auch die 108 Sonderbeine mit gekürztem Twist und stehenden Enden. Ein negativer Abstand heißt: zwei Leiter berühren sich.",
    at2_f: "d ≥ 0 für jedes Paar benachbarter Beine",
    mod1_l2: "Nebenbedingungen als Geometrie: Abstand, Biegeradius, Bauraum, Fügereihenfolge",
    ar_gh: "GitHub-Repository",
    ar_lang: "Sprache",
    ar_gap: "Mindestabstand",
    ar_mods: "Module",
    ar_chain: "Prozesskette",
    ar_scroll: "Nach unten scrollen",
    ar_suite: "Fronteer Hairpin Suite-Vorschau",
  },
}
let lang = 'en'
const browserLang = () => ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en'
try { const st = localStorage.getItem('site_lang'); lang = st ? (st === 'de' ? 'de' : 'en') : browserLang() } catch (e) { lang = browserLang() }
const tr = k => T[lang][k] ?? k
const $ = s => document.querySelector(s)
const $$ = s => [...document.querySelectorAll(s)]
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const ease = t => 1 - Math.pow(1 - clamp(t), 3)
const lerp = (a, b, t) => a + (b - a) * t
const NS = 'http://www.w3.org/2000/svg'
const el = (tag, attrs = {}, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent && parent.appendChild(e); return e }
const txt = (parent, x, y, s, cls, extra = {}) => { const t = el('text', { x, y, class: cls, ...extra }, parent); t.textContent = s; return t }
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches
const NARROW = innerWidth < 700          // schmale Bühne: Achsnamen schräg stellen
const S = window.SITE                    // Ergebnisdaten (data.js)

/* ---------- Texte, Sprache ---------- */
function applyTexts() {
  document.documentElement.lang = lang
  $$('[data-i18n]').forEach(e => { e.innerHTML = tr(e.dataset.i18n) })
  $$('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', tr(e.dataset.i18nAria)))
  $$('[data-i18n-title]').forEach(e => e.setAttribute('title', tr(e.dataset.i18nTitle)))
  $$('img[data-img]').forEach(i => { i.src = `img/${lang}_${i.dataset.img}.jpg`; i.alt = tr('alt_' + i.dataset.img) })
  $('#cutImg').src = `img/${lang}_stator.jpg`; $('#cutImg').alt = tr('alt_stator')
  $('#lang').value = lang
  $$('[data-count].done').forEach(e => { e.textContent = fmt(+e.dataset.count, +(e.dataset.dec || 0)) })
  if (window.buildResults) buildResults()
  buildMfg()
  const M = lang === 'de'
    ? ['Fronteer Hairpin – vom Wickelschema zum fertigen Hairpin-Stator', 'Fronteer Hairpin: Software-Suite für Hairpin-Statoren (Haarnadelwicklung) von Elektromotoren: Wickelschema, Wickelkopf-Optimierung der S-Schlagseite, Twistseite mit Sonderbeinen, Busbar und Fertigung bis zum fertigen Stator.']
    : ['Fronteer Hairpin – from winding scheme to finished hairpin stator', 'Fronteer Hairpin: software suite for hairpin winding stators of electric motors: winding scheme, end-winding optimization of the forming side, twist side with special legs, busbar and manufacturing up to the finished stator.']
  document.title = M[0]
  ;[['meta[name="description"]', M[1]], ['meta[property="og:title"]', M[0]], ['meta[property="og:description"]', M[1]]].forEach(([q, v]) => { const m = $(q); if (m) m.setAttribute('content', v) })
}
/* ---------- Manufacturing-Animation: vorab aufgenommenes Video (je Sprache), spielt nur im Sichtbereich ---------- */
const mfgVid = document.getElementById('mfgVid')
function setMfgVideo() {
  if (!mfgVid) return
  const base = `mfg_animation_${lang}`, first = mfgVid.querySelector('source')
  if (first && first.getAttribute('src') !== base + '.mp4') {
    mfgVid.querySelectorAll('source').forEach(s => s.setAttribute('src', base + (s.type === 'video/mp4' ? '.mp4' : '.webm')))
    mfgVid.poster = base + '.jpg'; mfgVid.load()
  }
}
const vidState = []
function bindVideo(el, btn) {                                   // spielt nur im Sichtbereich, mit Pausenknopf; bei "weniger Bewegung" bleibt das Standbild
  if (!el) return
  const st = { btn, paused: false }; vidState.push(st)
  const play = () => { const p = el.play(); if (p && p.catch) p.catch(() => {}) }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) new IntersectionObserver(es => { if (es[0].isIntersecting) { if (!st.paused) play() } else el.pause() }, { threshold: .15 }).observe(el)
  if (btn) btn.addEventListener('click', () => { st.paused = !st.paused; st.paused ? el.pause() : play(); vidLabel() })
}
function vidLabel() {
  vidState.forEach(st => { if (!st.btn) return; st.btn.setAttribute('aria-label', tr(st.paused ? 'vid_play' : 'vid_pause')); st.btn.firstElementChild.textContent = st.paused ? '▶' : '❚❚' })
}
bindVideo(mfgVid, document.getElementById('vidToggle'))
const heroVid = document.getElementById('heroVid')
bindVideo(heroVid, document.getElementById('heroToggle'))
function applyLang() {
  setMfgVideo()
  applyTexts()
  vidLabel()
  if (S) { drawAll(); applyTexts(); layoutTags(); onScroll() }
  try { localStorage.setItem('site_lang', lang) } catch (e) { /* */ }
}
$('#lang').addEventListener('change', e => { lang = e.target.value; applyLang() })
setMfgVideo()
if (CONFIG.contact) $('#navcontact').href = CONFIG.contact; else $('#navcontact').style.display = 'none'
if (CONFIG.contact) $('#contact').href = CONFIG.contact; else $('#contact').style.display = 'none'

/* ---------- Pin-Zeichnung aus der echten Mittellinie ---------- */
function pinPath(points, W, H, pad) {
  const r0 = points.reduce((s, p) => s + Math.hypot(p[0], p[1]), 0) / points.length
  let prev = Math.atan2(points[0][1], points[0][0]), ang = prev
  const pts = points.map(p => { const a = Math.atan2(p[1], p[0]); let d = a - prev; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; ang += d; prev = a; return [ang * r0, p[2]] })
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1])
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys)
  const s = Math.min((W - 2 * pad) / (x1 - x0), (H - 2 * pad) / (y1 - y0))
  const ox = (W - (x1 - x0) * s) / 2, oy = (H - (y1 - y0) * s) / 2
  return pts.map((p, i) => `${i ? 'L' : 'M'}${(ox + (p[0] - x0) * s).toFixed(1)},${(H - oy - (p[1] - y0) * s).toFixed(1)}`).join('')
}
function gradDefs(svg, id) {
  const d = el('defs', {}, svg), g = el('linearGradient', { id, x1: 0, y1: 0, x2: 0, y2: 1 }, d)
  el('stop', { offset: 0, 'stop-color': '#f0b48e' }, g); el('stop', { offset: 1, 'stop-color': '#b8683e' }, g)
}
function drawHeroPin() {
  const svg = $('#heroPin'); svg.innerHTML = ''
  gradDefs(svg, 'pinGrad')
  const d = pinPath(S.pin, 400, 700, 30)
  const paths = ['pin-glow', 'pin-line', 'pin-edge'].map(c => el('path', { d, class: c }, svg))
  const len = paths[1].getTotalLength()
  paths.forEach(p => { p.style.strokeDasharray = len; p.style.strokeDashoffset = REDUCED ? 0 : len })
  if (!REDUCED) requestAnimationFrame(() => requestAnimationFrame(() => paths.forEach(p => { p.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(.3,.6,.2,1)'; p.style.strokeDashoffset = 0 })))
}

/* ---------- Bühne: gemeinsame Hilfen ---------- */
const LEN = 'len', GAP = 'gap', ANG = 'ang'
const feas = e => e.ok === 1
const PN = {}; { let a = 0; Object.keys(S.free).forEach(n => { PN[n] = `${++a}` }) }
const axisG = svg => el('g', { class: 'axis' }, svg)

/* Schritt 1 · Regeln: Pin */
function drawPin() {
  const pin = $('#stagePin'); pin.innerHTML = ''
  gradDefs(pin, 'pinGrad2')
  const d = pinPath(S.pin, 600, 440, 40)
  ;['pin-glow', 'pin-line', 'pin-edge'].forEach(c => { const p = el('path', { d, class: c }, pin); if (c === 'pin-line') p.setAttribute('stroke', 'url(#pinGrad2)') })
}
function layoutTags() {
  const box = $('#tags'); box.innerHTML = ''
  const L = S.limits, St = S.stator
  const tags = [[`${tr('t_gap')} <b>≥ ${fmt(L.min_gap)} mm</b>`, '5%', '16%'], [`${tr('t_bend')}`, '71%', '24%'],
    [`${tr('t_pitch')} <b>${St.basket_pitch} / ${St.slot_count} ${tr('slots')}</b>`, '5%', '52%'], [`${tr('t_space')} <b>⌀ ${L.build_space_inner_dia.toFixed(0)}–${L.build_space_outer_dia.toFixed(0)} mm</b>`, '62%', '68%']]
  tags.forEach(([h, l, t], i) => { const d = document.createElement('div'); d.className = 'tag'; d.innerHTML = h; d.style.left = l; d.style.top = t; d.style.transitionDelay = `${i * 120}ms`; box.appendChild(d) })
}

/* Schritt 2 · Screening: parallele Koordinaten */
let par = null
function drawPar() {
  const svg = $('#stagePar'); svg.innerHTML = ''
  const names = Object.keys(S.free)
  const ev = S.evals.filter(e => e.ph < 2)
  const rs = [[LEN, tr('ax_len')], [GAP, tr('ax_gap')], [ANG, tr('ax_ang')]]
  const nA = names.length + rs.length, top = 70, bot = 370, x = i => 44 + (i + (i >= names.length ? .6 : 0)) * (512 / (nA - 1 + .6))
  const rng = rs.map(([k]) => { const v = ev.map(e => e[k]); const lo = Math.min(...v), hi = Math.max(...v), p = (hi - lo || 1) * .06; return [lo - p, hi + p] })
  const lab = (i, s) => { const g = axisG(svg); el('line', { x1: x(i), x2: x(i), y1: top, y2: bot }, g); const t = txt(g, x(i), bot + 20, s, '', { 'text-anchor': NARROW ? 'end' : 'middle' }); if (NARROW) t.setAttribute('transform', `rotate(-48 ${x(i)} ${bot + 20})`) }
  names.forEach((n, i) => lab(i, `P${PN[n]}`)); rs.forEach(([, l], j) => lab(names.length + j, l))
  txt(svg, 44, 36, tr('par_cap'), 'cap'); txt(svg, 44, 54, tr('par_cap2'), 'cap')
  par = ev.map(e => {
    const pts = names.map((n, i) => [x(i), bot - clamp((e.p[n] - S.free[n].min) / (S.free[n].max - S.free[n].min || 1)) * (bot - top)])
      .concat(rs.map(([k], j) => [x(names.length + j), bot - clamp((e[k] - rng[j][0]) / (rng[j][1] - rng[j][0])) * (bot - top)]))
    const cls = e.id === S.best ? 'best' : feas(e) ? 'ok' : 'bad'
    const p = el('path', { d: pts.map(([a, b], i) => `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`).join(''), class: 'pline ' + cls }, svg)
    const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L
    return { p, L, cls }
  }).sort((a, b) => ({ bad: 0, ok: 1, best: 2 }[a.cls] - { bad: 0, ok: 1, best: 2 }[b.cls]))
  par.forEach(o => svg.appendChild(o.p))
}

/* Schritte 3/4 · Gauß-Prozess in einer Dimension (echte Rechnung an einer Beispielfunktion) */
const GPX = [.08, .93, .5, .27, .72, .62, .38, .83, .17, .56, .44, .33, .67, .22, .88]
const toyF = x => .55 * Math.sin(6.4 * x + .4) + .3 * Math.sin(14 * x) + .9 * (x - .62) ** 2
const GRID = Array.from({ length: 121 }, (_, i) => i / 120)
const phi = z => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI)
const Phi = z => { const t = 1 / (1 + .3275911 * Math.abs(z) / Math.SQRT2), y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - .284496736) * t + .254829592) * t * Math.exp(-z * z / 2); return z >= 0 ? .5 * (1 + y) : .5 * (1 - y) }
function gpPost(n) {
  const xs = GPX.slice(0, n), ys = xs.map(toyF), ell = .1, kf = (a, b) => Math.exp(-.5 * ((a - b) / ell) ** 2)
  const K = xs.map((a, i) => xs.map((b, j) => kf(a, b) + (i === j ? 1e-4 : 0)))
  const Lc = K.map(r => r.map(() => 0))                         // Cholesky-Zerlegung
  for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) { let s = K[i][j]; for (let k = 0; k < j; k++) s -= Lc[i][k] * Lc[j][k]; Lc[i][j] = i === j ? Math.sqrt(Math.max(s, 1e-12)) : s / Lc[j][j] }
  const solveL = b => { const y = []; for (let i = 0; i < n; i++) { let s = b[i]; for (let k = 0; k < i; k++) s -= Lc[i][k] * y[k]; y.push(s / Lc[i][i]) } return y }
  const solveLt = y => { const x = Array(n).fill(0); for (let i = n - 1; i >= 0; i--) { let s = y[i]; for (let k = i + 1; k < n; k++) s -= Lc[k][i] * x[k]; x[i] = s / Lc[i][i] } return x }
  const alpha = solveLt(solveL(ys))
  const mean = [], sd = []
  for (const g of GRID) { const ks = xs.map(a => kf(a, g)); mean.push(ks.reduce((s, v, i) => s + v * alpha[i], 0)); const v = solveL(ks); sd.push(Math.sqrt(Math.max(1 - v.reduce((s, q) => s + q * q, 0), 1e-9)) * .7) }
  return { mean, sd }
}
const GPN = 10
const GPS = Array.from({ length: GPN + 1 }, (_, n) => (n >= 1 ? gpPost(n) : null))
const gpMin = Math.min(...GRID.map(toyF)) - .1, gpMax = Math.max(...GRID.map(toyF)) + .1
const gpErr = P => Math.sqrt(GRID.reduce((s, x, i) => s + (P.mean[i] - toyF(x)) ** 2, 0) / GRID.length)
const GPE = GPS.map(P => (P ? gpErr(P) : 0))                     // Modellfehler je Anzahl Messungen
const gpBest = n => Math.min(...GPX.slice(0, n).map(toyF))
// Erwarteter Gewinn für die Runde nach der letzten Messung des Lernens (Minimierung), auf 0…1 normiert
const GPA = (() => {
  const best = gpBest(GPN), P = GPS[GPN]
  const a = GRID.map((_, i) => { const s = P.sd[i], z = (best - P.mean[i]) / s; return (best - P.mean[i]) * Phi(z) + s * phi(z) })
  const mx = Math.max(...a) || 1
  return a.map(v => Math.pow(Math.max(0, v) / mx, .3))           // Anzeige gestaucht, damit auch die weiteren Vorschläge sichtbar sind
})()
const GPP = (() => { const idx = GRID.map((_, i) => i).sort((a, b) => GPA[b] - GPA[a]), out = []; for (const i of idx) if (out.length < 5 && out.every(j => Math.abs(j - i) > 9)) out.push(i); return out })()
const RED = [239, 107, 107], AMBER = [240, 190, 90], GREEN = [79, 209, 160]
const mixC = f => { f = clamp(f); const [a, b, t] = f < .5 ? [RED, AMBER, f * 2] : [AMBER, GREEN, f * 2 - 1]; return `rgb(${a.map((v, i) => Math.round(lerp(v, b[i], t))).join(',')})` }
let gp = null
function drawGP() {
  const svg = $('#stageGP'); svg.innerHTML = ''
  const X = g => 56 + g * 500, Y = v => 252 - (v - gpMin) / (gpMax - gpMin) * 176, BASE = 410, YA = a => BASE - a * 74
  const g = axisG(svg); el('line', { x1: 56, x2: 556, y1: 262, y2: 262 }, g); el('line', { x1: 56, x2: 56, y1: 66, y2: 262 }, g)
  txt(g, 556, 280, tr('gp_x'), 'lab halo', { 'text-anchor': 'end' }); txt(g, 56, 60, tr('gp_y') + ' ↑', 'lab')
  const tru = el('path', { d: GRID.map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)},${Y(toyF(x)).toFixed(1)}`).join(''), class: 'gp-true' }, svg)
  const cd = el('defs', {}, svg), cp = el('clipPath', { id: 'gpClip' }, cd); el('rect', { x: 56, y: 62, width: 500, height: 200 }, cp)
  const band = el('path', { class: 'gp-band', 'clip-path': 'url(#gpClip)' }, svg), mean = el('path', { class: 'gp-mean', 'clip-path': 'url(#gpClip)' }, svg)
  const bestL = el('line', { x1: 56, x2: 556, class: 'gp-best' }, svg), bestT = txt(svg, 62, 0, tr('gp_best'), 'cap halo')
  const obs = GPX.slice(0, GPN).map(x => el('circle', { cx: X(x), cy: Y(toyF(x)), r: 5, class: 'gp-obs' }, svg))
  const dropG = el('g', {}, svg)
  // unteres Feld: erwarteter Gewinn
  const acqG = el('g', {}, svg)
  el('line', { x1: 56, x2: 556, y1: BASE, y2: BASE, class: 'gp-acq-base' }, acqG)
  const acqT = txt(acqG, 56, 306, tr('gp_acq'), 'capb halo'), acqS = txt(acqG, 56, 324, tr('gp_acq_sub'), 'cap halo')
  const bars = el('path', { class: 'gp-acq-bars' }, acqG)
  const props = GPP.map((i, k) => {
    const gg = el('g', {}, svg), ln = el('path', { class: 'gp-drop' }, dropG)
    const c = el('circle', { cx: X(GRID[i]), r: 9, class: 'gp-flag' }, gg), tn = txt(gg, X(GRID[i]), 0, k + 1, 'flag-n', { 'text-anchor': 'middle' })
    return { gg, c, tn, i, ln }
  })
  const cap = txt(svg, 556, 22, '', 'capb', { 'text-anchor': 'end' })
  const legend = txt(svg, 56, 22, '', 'cap')
  const gauge = el('g', {}, svg)
  txt(gauge, 56, 46, tr('gp_err'), 'cap')
  el('rect', { x: 148, y: 39, width: 150, height: 7, rx: 3.5, class: 'gauge-bg' }, gauge)
  const gbar = el('rect', { x: 148, y: 39, width: 150, height: 7, rx: 3.5 }, gauge), gtxt = txt(gauge, 306, 46, '', 'cap')
  txt(svg, 556, 436, tr('gp_toy'), 'cap', { 'text-anchor': 'end' })
  gp = { X, Y, YA, BASE, tru, band, mean, obs, props, cap, legend, acqG, bars, bestL, bestT, gbar, gtxt, acqT }
}
function renderGP(mode, p) {
  const { X, Y, YA, BASE, tru, band, mean, obs, props, cap, legend, acqG, bars, bestL, bestT, gbar, gtxt } = gp
  const c = mode === 'learn' ? 1 + clamp(p * 1.05) * (GPN - 1) : GPN
  const n0 = Math.floor(c), n1 = Math.min(GPN, n0 + 1), f = c - n0
  const A = GPS[n0], B = GPS[n1]
  const m = GRID.map((_, i) => lerp(A.mean[i], B.mean[i], f)), s = GRID.map((_, i) => lerp(A.sd[i], B.sd[i], f))
  const err = lerp(GPE[n0], GPE[n1], f), q = clamp(1 - err / GPE[1])        // 0 = Anfangsfehler (rot) … 1 = fast fehlerfrei (grün)
  const e = err / GPE[1], e1 = GPE[GPN] / GPE[1], col = mixC((1 - Math.sqrt(e)) / (1 - Math.sqrt(e1)))
  mean.setAttribute('d', GRID.map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)},${Y(m[i]).toFixed(1)}`).join(''))
  band.setAttribute('d', GRID.map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)},${Y(m[i] + 2 * s[i]).toFixed(1)}`).join('') + GRID.map((x, i) => `L${X(GRID[120 - i]).toFixed(1)},${Y(m[120 - i] - 2 * s[120 - i]).toFixed(1)}`).join('') + 'Z')
  mean.style.stroke = col; band.style.fill = col; gbar.style.fill = col
  gbar.setAttribute('width', (150 * Math.max(.04, e)).toFixed(1))
  gtxt.textContent = `${Math.round(err / GPE[1] * 100)} %`
  obs.forEach((o, i) => { o.style.opacity = i < n0 ? 1 : i === n0 ? clamp(f * 1.5) : 0 })
  const bst = lerp(gpBest(Math.max(1, n0)), gpBest(Math.max(1, n1)), f), yb = Y(bst)
  bestL.setAttribute('y1', yb); bestL.setAttribute('y2', yb); bestT.setAttribute('y', yb - 6)
  bestL.style.opacity = bestT.style.opacity = n0 >= 2 ? 1 : 0
  tru.style.opacity = mode === 'learn' ? .9 : .5
  const a = mode === 'choose' ? ease(p * 2) : 0
  bars.setAttribute('d', GRID.map((x, i) => `M${X(x).toFixed(1)},${BASE}V${YA(GPA[i] * a).toFixed(1)}`).join(''))
  acqG.style.opacity = a > 0 ? 1 : 0
  props.forEach(o => {
    const v = mode === 'choose' ? clamp((p - .42 - props.indexOf(o) * .07) * 6) : 0, x = X(GRID[o.i]), yc = Y(m[o.i]) - 18
    o.gg.style.opacity = v
    o.ln.setAttribute('d', `M${X(GRID[o.i])},${yc + 9}V262M${X(GRID[o.i])},334V${BASE}`); o.ln.style.opacity = v; o.c.setAttribute('cy', yc); o.tn.setAttribute('y', yc + 4)
  })
  cap.textContent = mode === 'learn' ? `${tr('gp_nm')}${Math.round(n0 + (f > .5 ? 1 : 0))}` : tr('gp_prop')
  legend.textContent = `${tr('gp_est')} ─   ${tr('gp_unc')} ▒   ${tr('gp_meas')} ●`
}

/* Schritt 5 · Karte des Modells (echte Modelldaten): Höhenlinien der erwarteten Leiterlänge */
let mp = null
const LEVELS = [170, 175, 180, 185, 190, 195, 200, 205, 210, 215]
function contour(vals, n, lev) {                                // Marching Squares, lineare Interpolation; Ergebnis: Liste von Strecken in Zellkoordinaten
  const out = [], v = (i, j) => vals[i * n + j]
  const cross = (a, b, i0, j0, i1, j1) => { const t = (lev - a) / (b - a); return [i0 + (i1 - i0) * t, j0 + (j1 - j0) * t] }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) {
    const a = v(i, j), b = v(i + 1, j), c = v(i + 1, j + 1), d = v(i, j + 1)   // a unten links, b unten rechts, c oben rechts, d oben links
    const code = (a > lev ? 1 : 0) | (b > lev ? 2 : 0) | (c > lev ? 4 : 0) | (d > lev ? 8 : 0)
    if (code === 0 || code === 15) continue
    const bo = () => cross(a, b, i, j, i + 1, j), ri = () => cross(b, c, i + 1, j, i + 1, j + 1), to = () => cross(d, c, i, j + 1, i + 1, j + 1), le = () => cross(a, d, i, j, i, j + 1)
    const seg = { 1: [le, bo], 2: [bo, ri], 3: [le, ri], 4: [ri, to], 5: [le, to, bo, ri], 6: [bo, to], 7: [le, to], 8: [le, to], 9: [bo, to], 10: [le, bo, to, ri], 11: [ri, to], 12: [le, ri], 13: [bo, ri], 14: [le, bo] }[code]
    for (let k = 0; k < seg.length; k += 2) out.push([seg[k](), seg[k + 1]()])
  }
  return out
}
function drawMap() {
  const svg = $('#stageMap'); svg.innerHTML = ''
  const M = S.map, n = M.n, X0 = 70, Y0 = 64, W = 470, H = 316
  const cv = document.createElement('canvas'); cv.width = n; cv.height = n
  const img = el('image', { x: X0, y: Y0, width: W, height: H, preserveAspectRatio: 'none' }, svg)
  const iso = el('g', {}, svg), pts = el('g', {}, svg), ann = el('g', {}, svg)
  const [dx, dy] = M.dims, fx = S.free[dx], fy = S.free[dy]
  const PX = v => X0 + (v - fx.min) / (fx.max - fx.min) * W, PY = v => Y0 + H - (v - fy.min) / (fy.max - fy.min) * H
  const star = (cx, cy, r) => { let d = ''; for (let k = 0; k < 10; k++) { const rr = k % 2 ? r * .45 : r, a = -Math.PI / 2 + k * Math.PI / 5; d += `${k ? 'L' : 'M'}${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}` } return d + 'Z' }
  const ev = S.evals.filter(e => e.p[dx] != null && e.p[dy] != null).map(e => {
    const cx = PX(e.p[dx]), cy = PY(e.p[dy]), isBest = e.id === S.best
    const c = isBest ? el('path', { d: star(cx, cy, 9), class: 'map-star' }, pts)
      : feas(e) ? el('circle', { cx, cy, r: 3.8, class: 'map-pt ok' }, pts)
      : el('path', { d: `M${cx - 3},${cy - 3}l6,6m0,-6l-6,6`, class: 'map-pt bad' }, pts)
    return { e, c }
  })
  const g = axisG(svg); el('line', { x1: X0, x2: X0 + W, y1: Y0 + H, y2: Y0 + H }, g); el('line', { x1: X0, x2: X0, y1: Y0, y2: Y0 + H }, g)
  txt(g, X0 + W, Y0 + H + 20, `${tr('par')} ${PN[dx]} →`, 'lab', { 'text-anchor': 'end' }); txt(g, X0, Y0 - 6, `${tr('par')} ${PN[dy]} ↑`, 'lab')
  const cap = txt(svg, X0, 22, '', 'capb'); txt(svg, X0, 40, tr('map_sub'), 'cap')
  const opt = el('g', {}, svg), lead = el('path', { class: 'map-opt-lead' }, opt), ring = el('circle', { r: 11, class: 'map-opt' }, opt), optT = txt(opt, 0, 0, '', 'capb halo')
  const lg = el('g', { class: 'maplegend' }, svg), ly = Y0 + H + 46
  el('circle', { cx: X0 + 4, cy: ly - 4, r: 3.8, class: 'map-pt ok' }, lg); txt(lg, X0 + 14, ly, tr('map_ok'), 'cap')
  el('path', { d: `M${X0 + 96},${ly - 7}l6,6m0,-6l-6,6`, class: 'map-pt bad' }, lg); txt(lg, X0 + 108, ly, tr('map_bad'), 'cap')
  el('path', { d: star(X0 + 212, ly - 4, 7), class: 'map-star' }, lg); txt(lg, X0 + 224, ly, tr('map_best'), 'cap')
  el('rect', { x: X0 + 318, y: ly - 10, width: 14, height: 10, class: 'map-infeas-key' }, lg); txt(lg, X0 + 337, ly, tr('map_infeas'), 'cap')
  mp = { cv, img, iso, ev, cap, n, W, H, X0, Y0, ann, ring, optT, lead, PX, PY }
}
function renderMap(p) {
  const { cv, img, iso, ev, cap, n, W, H, X0, Y0, ring, optT, lead } = mp, G = S.map.grids
  const c = (REDUCED ? 1 : ease(p * 1.15)) * (G.length - 1), i0 = Math.floor(c), i1 = Math.min(G.length - 1, i0 + 1), f = c - i0
  const A = G[i0], B = G[i1], ctx = cv.getContext('2d'), id = ctx.createImageData(n, n)
  const pf = new Array(n * n), mv = new Array(n * n)
  let best = null
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const k = i * n + j
    mv[k] = lerp(A.mean[k], B.mean[k], f); pf[k] = lerp(A.pfeas[k], B.pfeas[k], f)
    const q = clamp((pf[k] - .25) / .5), px = ((n - 1 - j) * n + i) * 4
    id.data[px] = lerp(52, 24, q); id.data[px + 1] = lerp(27, 28, q); id.data[px + 2] = lerp(29, 31, q); id.data[px + 3] = 255     // unzulässig: rötlich, zulässig: neutral dunkel
    if (pf[k] >= .5 && (!best || mv[k] < best.v)) best = { v: mv[k], i, j }
  }
  ctx.putImageData(id, 0, 0); img.setAttribute('href', cv.toDataURL())
  const cw = W / n, ch = H / n, gx = i => X0 + (i + .5) * cw, gy = j => Y0 + H - (j + .5) * ch
  iso.innerHTML = ''
  const used = [], ox = best ? gx(best.i) : -999, oy = best ? gy(best.j) : -999
  LEVELS.forEach(lev => {
    const segs = contour(mv, n, lev)
    if (!segs.length) return
    const t = (lev - LEVELS[0]) / (LEVELS[LEVELS.length - 1] - LEVELS[0])
    el('path', { d: segs.map(([a, b]) => `M${gx(a[0]).toFixed(1)},${gy(a[1]).toFixed(1)}L${gx(b[0]).toFixed(1)},${gy(b[1]).toFixed(1)}`).join(''), class: 'map-contour', stroke: `rgb(${Math.round(lerp(120, 205, t))},${Math.round(lerp(235, 130, t))},${Math.round(lerp(190, 95, t))})`, 'stroke-width': lerp(2.2, 1.1, t) }, iso)
    let pick = null                                         // Beschriftung am Segment, das am weitesten rechts liegt und genug Abstand zu anderen Beschriftungen hat
    segs.forEach(([a, b]) => { const x = gx((a[0] + b[0]) / 2), y = gy((a[1] + b[1]) / 2); if (x > X0 + 22 && x < X0 + W - 22 && y > Y0 + 12 && y < Y0 + H - 8 && used.every(u => Math.hypot(u[0] - x, u[1] - y) > 34) && (!pick || x > pick[0])) pick = [x, y] })
    if (pick) { used.push(pick); txt(iso, pick[0], pick[1] + 3.5, lev, 'map-lab halo', { 'text-anchor': 'middle' }) }
  })
  const np = lerp(A.n_points, B.n_points, f)
  ev.forEach(o => { o.c.style.opacity = o.e.id < np ? 1 : 0 })
  cap.textContent = `${tr('map_round')} ${Math.round(lerp(A.round, B.round, f))} · ${Math.round(np)} ${tr('map_pins')}`
  if (best) {
    const x = gx(best.i), y = gy(best.j)
    ring.setAttribute('cx', x); ring.setAttribute('cy', y)
    optT.setAttribute('x', Math.min(Math.max(x, X0 + 100), X0 + W - 210)); optT.setAttribute('y', Y0 + H + 22); optT.setAttribute('text-anchor', 'middle')
    lead.setAttribute('d', y + 12 < Y0 + H ? `M${x},${y + 12}V${Y0 + H + 4}` : '')
    optT.textContent = `${tr('map_opt')} ≈ ${fmt(best.v, 0)} mm`
    ring.style.opacity = optT.style.opacity = lead.style.opacity = clamp((f + i0 - 1) * 1)         // erst ab der zweiten Karte
  }
}

/* Schritt 6–8 · Zielraum: gut/schlecht (a), Front wandert (b), Auswahl nach Anforderung (c) */
let fr = null
const NF = {}
const fmt = (v, d = 1) => { const k = lang + d; return (NF[k] ??= new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: false })).format(v) }
const frontOf = f => f.filter(a => !f.some(b => b !== a && b.len <= a.len && b.gap >= a.gap && (b.len < a.len || b.gap > a.gap))).sort((a, b) => a.len - b.len)
const topOf = (f, L) => f.reduce((m, e) => (e.len <= L ? Math.max(m, e.gap) : m), -Infinity)
function areaRef(front, x1) {                                     // Fläche der erfüllbaren Kombinationen (Länge ≤ L, Abstand ≥ g > 0)
  let a = 0
  for (let i = 0; i < front.length; i++) { const xr = i + 1 < front.length ? front[i + 1].len : x1; a += Math.max(0, xr - front[i].len) * Math.max(0, front[i].gap) }
  return a
}
let pickUser = false, pickVal = .3
function drawFront() {
  const svg = $('#stageFront'); svg.innerHTML = ''
  const all = S.evals.filter(e => e.gap != null).sort((a, b) => a.id - b.id)
  const xs = all.map(e => e.len).filter(v => v < 235), ys = all.map(e => e.gap)
  const x0 = Math.min(...xs) - 3, x1 = Math.max(...xs) + 3, y0 = Math.max(Math.min(...ys), -1.2) - .1, y1 = Math.max(...ys) + .1
  const X = v => 56 + clamp((v - x0) / (x1 - x0)) * 504, Y = v => 380 - clamp((v - y0) / (y1 - y0)) * 310
  const defs = el('defs', {}, svg), rg = el('radialGradient', { id: 'idealG', cx: 0, cy: 0, r: 1 }, defs)
  el('stop', { offset: 0, 'stop-color': '#4fd1a0', 'stop-opacity': .38 }, rg); el('stop', { offset: 1, 'stop-color': '#4fd1a0', 'stop-opacity': 0 }, rg)
  const mk = el('marker', { id: 'arrH', markerWidth: 7, markerHeight: 7, refX: 5.5, refY: 3.5, orient: 'auto' }, defs); el('path', { d: 'M0,0L7,3.5L0,7z', fill: '#e9e9ec' }, mk)
  const ideal = el('rect', { x: 56, y: 70, width: 300, height: 220, fill: 'url(#idealG)' }, svg)
  const band = el('rect', { x: 56, y: 70, width: 504, height: 0, class: 'req-band' }, svg)
  const g = axisG(svg); el('line', { x1: 56, x2: 560, y1: 380, y2: 380 }, g); el('line', { x1: 56, x2: 56, y1: 70, y2: 380 }, g)
  txt(g, 560, 402, tr('length_mm'), 'lab', { 'text-anchor': 'end' }); txt(g, 50, 62, tr('gap_mm'), 'lab', { 'text-anchor': 'start' })
  const area = el('path', { class: 'hv-area' }, svg), gain = el('path', { class: 'fr-gain' }, svg), prev = el('path', { class: 'front-prev' }, svg), line = el('path', { class: 'front-line' }, svg)
  const reqL = el('line', { x1: 56, x2: 560, class: 'req-line' }, svg), reqT = txt(svg, 62, 0, '', 'capb halo req-t')
  const pts = all.map(e => {
    const cx = X(e.len), cy = Y(e.gap)
    if (!feas(e)) return { e, c: el('path', { d: `M${cx - 2.6},${cy - 2.6}l5.2,5.2m0,-5.2l-5.2,5.2`, class: 'pt bad' }, svg) }
    return { e, c: el('circle', { cx, cy, r: 3.8, class: 'pt ok' }, svg), ring: el('circle', { cx, cy, r: 7.2, class: 'fr-ring' }, svg) }
  })
  const pulse = el('circle', { r: 10, class: 'fr-pulse' }, svg)
  const sel = el('g', {}, svg), selV = el('line', { class: 'sel-drop' }, sel), selC = el('circle', { r: 11, class: 'sel-ring' }, sel)
  const badge = txt(svg, 0, 0, '', 'badge-t halo')
  // Beispielpfeil: ein überholter Pin und ein Frontpunkt, der in beiden Zielen besser ist
  const final = frontOf(all.filter(feas)), fin = new Set(final.map(e => e.id))
  const nd = (a, b) => Math.hypot((a.len - b.len) / (x1 - x0), (a.gap - b.gap) / (y1 - y0))
  const dom = all.filter(e => feas(e) && !fin.has(e.id) && e.len < x1 - 25).map(d => { const t = final.filter(f => f.len < d.len && f.gap > d.gap).sort((p, q) => nd(p, d) - nd(q, d))[0]; return t && { d, t, k: nd(t, d) } }).filter(Boolean).sort((p, q) => p.k - q.k)
  const ex = dom[Math.floor(dom.length * .6)]
  const arrow = el('g', {}, svg)
  if (ex) { el('line', { x1: X(ex.d.len), y1: Y(ex.d.gap), x2: X(ex.t.len) + 1, y2: Y(ex.t.gap) + 1, class: 'ex-arrow', 'marker-end': 'url(#arrH)' }, arrow); fr_ex = ex }
  const ax = ex ? (X(ex.d.len) + X(ex.t.len)) / 2 : 0, ay = ex ? (Y(ex.d.gap) + Y(ex.t.gap)) / 2 : 0
  const exT = ex ? txt(arrow, ax + 8, ay + 14, tr('fr_ex'), 'cap halo') : null
  const cap = txt(svg, 56, 22, '', 'capb'), hv = txt(svg, 56, 40, '', 'cap')
  const dp = all.filter(e => feas(e) && !fin.has(e.id) && e.len < x1 - 25), domX = Math.min(Math.max(dp.reduce((a, e) => a + X(e.len), 0) / (dp.length || 1), 190), 420), domY = Math.min(Y(dp.reduce((a, e) => a + e.gap, 0) / (dp.length || 1)) + 70, 350)
  const lab = {
    ideal: txt(svg, 66, 96, tr('fr_ideal'), 'capb halo ideal-t'), open: txt(svg, 66, 114, tr('fr_open'), 'cap halo'),
    front: txt(svg, 552, Y(final[final.length - 1].gap) - 9, tr('fr_front'), 'capb halo front-t', { 'text-anchor': 'end' }),
    dom: txt(svg, domX, domY, tr('fr_dom'), 'cap halo dom-t', { 'text-anchor': 'middle' }),
    done: txt(svg, 552, 366, tr('fr_done'), 'cap halo', { 'text-anchor': 'end' }),
  }
  // Mini-Verlauf: erfüllbarer Bereich je Variante
  const sparkV = [0]; all.forEach((e, i) => sparkV.push(areaRef(frontOf(all.slice(0, i + 1).filter(feas)), x1)))
  const sMax = sparkV[sparkV.length - 1] || 1
  const spark = el('g', {}, svg); txt(spark, 560, 16, tr('fr_spark'), 'cap', { 'text-anchor': 'end' })
  el('rect', { x: 404, y: 22, width: 156, height: 30, rx: 4, class: 'spark-bg' }, spark)
  const sparkL = el('path', { class: 'spark-line' }, spark), sparkD = el('circle', { r: 3, class: 'spark-dot' }, spark)
  const lg = el('g', {}, svg), ly = 428
  el('circle', { cx: 60, cy: ly - 4, r: 3.8, class: 'pt ok' }, lg); el('circle', { cx: 60, cy: ly - 4, r: 7.2, class: 'fr-ring' }, lg); txt(lg, 72, ly, tr('fr_ok'), 'cap')
  el('circle', { cx: 168, cy: ly - 4, r: 3.8, class: 'pt dom' }, lg); txt(lg, 178, ly, tr('fr_old'), 'cap')
  el('path', { d: 'M268,424l5.2,5.2m0,-5.2l-5.2,5.2', class: 'pt bad' }, lg); txt(lg, 280, ly, tr('fr_bad'), 'cap')
  const lgNew = el('g', {}, lg); el('rect', { x: 384, y: ly - 9, width: 16, height: 9, class: 'fr-gain-key' }, lgNew); txt(lgNew, 406, ly, tr('fr_new'), 'cap')
  fr = { X, Y, x0, y0, y1, x1, area, gain, prev, line, pts, cap, hv, pulse, all, lab, ideal, band, reqL, reqT, sel, selV, selC, badge, arrow, ex, spark, sparkL, sparkD, sparkV, sMax, lg, lgNew, final }
}
let fr_ex = null
const pathStairs = (front, X, Y, x1) => { let d = ''; front.forEach((e, i) => { const xr = i + 1 < front.length ? front[i + 1].len : x1; d += `${i ? 'L' : 'M'}${X(e.len).toFixed(1)},${Y(e.gap).toFixed(1)}L${X(xr).toFixed(1)},${Y(e.gap).toFixed(1)}` }); return d }
function renderFront(mode, p) {
  const N = fr.all.length, { X, Y } = fr
  const c = mode === 'b' && !REDUCED ? Math.max(Math.round(.45 * N), Math.round(clamp(p * 1.8) * N)) : N
  const shown = fr.pts.filter(o => o.e.id < c)
  const feasShown = shown.map(o => o.e).filter(feas), front = frontOf(feasShown), ids = new Set(front.map(e => e.id))
  const newest = front.reduce((m, e) => (e.id > (m ? m.id : -1) ? e : m), null)
  const before = newest ? frontOf(feasShown.filter(e => e.id < newest.id)) : []
  const A = mode === 'a' ? (REDUCED ? 1 : p) : 1
  const fFront = mode === 'a' ? clamp(A * 4) : 1, fDim = mode === 'a' ? clamp((A - .25) * 4) : 1
  const lerpRGB = (a, b, t) => `rgb(${a.map((v, i) => Math.round(lerp(v, b[i], t))).join(',')})`
  fr.pts.forEach(o => {
    const on = o.e.id < c
    o.c.style.opacity = on ? 1 : 0
    if (!o.ring) return
    const isF = ids.has(o.e.id)
    o.ring.style.opacity = on && isF ? fFront : 0
    o.c.style.fill = isF ? lerpRGB([79, 209, 160], [120, 245, 195], fFront) : lerpRGB([79, 209, 160], [124, 128, 137], fDim)
    o.c.style.opacity = on ? (isF ? 1 : lerp(.9, .6, fDim)) : 0
    o.c.setAttribute('r', isF ? 3.8 + 1.2 * fFront : 3.6)
  })
  fr.line.setAttribute('d', front.length ? pathStairs(front, X, Y, fr.x1) : '')
  fr.line.style.opacity = fFront
  fr.area.setAttribute('d', front.length ? `M${X(front[0].len)},${Y(fr.y0)}L${X(front[0].len)},${Y(front[0].gap)}` + pathStairs(front, X, Y, fr.x1).replace(/^M[^L]*/, '') + `L${X(fr.x1)},${Y(fr.y0)}Z` : '')
  fr.area.style.opacity = (mode === 'a' ? clamp((A - .55) * 4) : 1) * .17
  // b: neu gewonnene Fläche, Hinweis, Mini-Verlauf
  const isB = mode === 'b'
  fr.prev.setAttribute('d', isB && before.length ? pathStairs(before, X, Y, fr.x1) : '')
  if (isB && front.length && newest && before.length) {
    const grid = []; for (let k = 0; k <= 60; k++) grid.push(fr.x0 + (fr.x1 - fr.x0) * k / 60)
    const top = (f, L) => Math.max(fr.y0, topOf(f, L))
    let up = '', dn = ''
    grid.forEach((L, k) => { up += `${k ? 'L' : 'M'}${X(L).toFixed(1)},${Y(top(front, L)).toFixed(1)}` })
    grid.slice().reverse().forEach(L => { dn += `L${X(L).toFixed(1)},${Y(top(before, L)).toFixed(1)}` })
    fr.gain.setAttribute('d', up + dn + 'Z')
  } else fr.gain.setAttribute('d', '')
  fr.pulse.setAttribute('cx', isB && newest ? X(newest.len) : -30); fr.pulse.setAttribute('cy', isB && newest ? Y(newest.gap) : -30)
  fr.pulse.style.opacity = isB && newest && c > 1 ? 1 : 0
  let msg = ''
  if (isB && newest && c > 1) {
    if (!before.length) msg = tr('fr_first')
    else {
      const cand = before.filter(e => e.gap >= newest.gap).map(e => e.len), dl = cand.length ? Math.min(...cand) - newest.len : null, dg = newest.gap - topOf(before, newest.len)
      msg = dl != null && dl > .05 ? `−${fmt(dl)} mm · ${tr('fr_len_same')}` : isFinite(dg) && dg > .005 ? `+${fmt(dg, 2)} mm · ${tr('fr_gap_same')}` : tr('fr_newzone')
    }
  }
  const bx = newest ? X(newest.len) : 0, flip = bx > 400
  fr.badge.textContent = msg; fr.badge.setAttribute('x', flip ? bx - 14 : bx + 14); fr.badge.setAttribute('y', newest ? Y(newest.gap) - 28 : 0); fr.badge.setAttribute('text-anchor', flip ? 'end' : 'start')
  fr.lgNew.style.opacity = isB ? 1 : 0
  fr.spark.style.opacity = isB ? 1 : 0
  if (isB) {
    const pts = []; for (let i = 0; i <= c; i++) pts.push([404 + 156 * i / N, 50 - 26 * fr.sparkV[i] / fr.sMax])
    fr.sparkL.setAttribute('d', pts.map(([a, b], i) => `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`).join(''))
    const last = pts[pts.length - 1]; fr.sparkD.setAttribute('cx', last[0]); fr.sparkD.setAttribute('cy', last[1])
  }
  // Beschriftungen je Kapitel
  const L = fr.lab, lv = (k, v) => { L[k].style.opacity = v }
  if (mode === 'a') { lv('ideal', clamp((A - .05) * 5)); lv('open', clamp((A - .05) * 5)); lv('front', clamp((A - .3) * 5)); lv('dom', clamp((A - .45) * 5)); lv('done', clamp((A - .6) * 5)) }
  else if (mode === 'b') { const e = 1; lv('ideal', 1); lv('open', 1); lv('front', e); lv('dom', e); lv('done', e) }
  else { lv('ideal', 0); lv('open', 0); lv('front', 1); lv('dom', 0); lv('done', 0) }
  fr.ideal.style.opacity = mode === 'c' ? .35 : 1
  fr.arrow.style.opacity = mode === 'a' ? clamp((A - .75) * 5) : mode === 'b' ? (REDUCED ? 1 : clamp((p - .88) * 8)) : 0
  // c: Auswahl nach Anforderung
  const isC = mode === 'c'
  fr.sel.style.opacity = isC ? 1 : 0; fr.reqL.style.opacity = fr.reqT.style.opacity = isC ? 1 : 0; fr.band.style.opacity = isC ? .1 : 0
  fr.lg.style.opacity = isC ? 0 : 1
  if (isC && front.length) {
    const gMin = front[0].gap, gMax = front[front.length - 1].gap, gq = lerp(gMin, gMax, clamp(pickVal)), pick = front.find(e => e.gap >= gq - 1e-9) || front[front.length - 1]
    const yq = Y(gq)
    fr.reqL.setAttribute('y1', yq); fr.reqL.setAttribute('y2', yq); fr.band.setAttribute('y', 70); fr.band.setAttribute('height', Math.max(0, yq - 70))
    fr.reqT.setAttribute('y', yq + 17); fr.reqT.setAttribute('x', 552); fr.reqT.setAttribute('text-anchor', 'end'); fr.reqT.textContent = `${tr('pick_req')} ≥ ${fmt(gq, 2)} mm`
    fr.selC.setAttribute('cx', X(pick.len)); fr.selC.setAttribute('cy', Y(pick.gap))
    fr.selV.setAttribute('x1', X(pick.len)); fr.selV.setAttribute('x2', X(pick.len)); fr.selV.setAttribute('y1', Y(pick.gap) + 11); fr.selV.setAttribute('y2', 380)
    fr.cap.textContent = `${tr('pick_res')} #${pick.id} · ${fmt(pick.len)} mm`
    fr.hv.textContent = `${tr('pick_gap')} ${fmt(pick.gap, 2)} mm`
    const out = $('#gapOut'); if (out) out.textContent = `≥ ${fmt(gq, 2)} mm`
  } else {
    fr.cap.textContent = isB ? `${tr('pv_variant')} ${c} / ${N}` : `${N} ${tr('fr_pins')} · ${front.length} ${tr('fr_opt')}`
    fr.hv.textContent = isB ? (front.length ? `${front.length} ${tr('fr_n')} · ${tr('fr_short')} ${fmt(front[0].len)} mm` : '') : tr('fr_sub_a')
  }
}
$('#gapReq').addEventListener('input', e => { pickUser = true; pickVal = +e.target.value / 1000; if (fr) renderFront('c', 1) })

/* ---------- Scroll ---------- */
const steps = $$('.step')
const MQ = matchMedia('(max-width: 900px)'), MOBILE = MQ.matches
MQ.addEventListener('change', () => location.reload())
/* Handy/Tablet: Kapitel aus Text(en) und einem Bild; Bild nach dem Text, animierte Bilder bleiben stehen (pin = zusätzliche Bildschirmhöhen) */
const CHAPS = []
function buildMobile() {
  const story = $('.story'), st = $$('.step')
  story.classList.add('mob')
  const spec = [{ s: [0], l: ['#stagePin', '#tags'], pin: 0 }, { s: [1], l: ['#stagePar'], pin: .6 }, { s: [2, 3], l: ['#stageGP'], pin: 1.0 },
    { s: [4], l: ['#stageMap'], pin: .6 }, { s: [5, 6], l: ['#stageFront', '#pickbox'], pin: 1.0 }, { s: [7], l: ['.stagecut'], pin: .5 }]
  spec.forEach(c => {
    const ch = document.createElement('div'); ch.className = 'chap'
    const tx = document.createElement('div'); tx.className = 'chap-text'; c.s.forEach(i => tx.appendChild(st[i]))
    const tr_ = document.createElement('div'); tr_.className = 'chap-track'; tr_.style.setProperty('--pin', c.pin)
    const card = document.createElement('div'); card.className = 'stage chap-card'
    c.l.forEach(q => card.appendChild($(q))); tr_.appendChild(card); ch.append(tx, tr_); story.appendChild(ch)
    CHAPS.push({ track: tr_, card, pin: c.pin })
  })
  $('.story-text').remove(); $('.story-visual').remove()
}
if (MOBILE) buildMobile()
/* Handy/Tablet: die Demo ist für den Computer gebaut - die Knöpfe kopieren stattdessen den Link */
function copyDemoLink() {
  $$('a[href^="suite/index.html"]').forEach(a => {
    a.dataset.demo = '1'
    const t = a.querySelector('[data-i18n="cta_demo"]'), m = a.querySelector('[data-i18n="desk_only"]')
    if (t) t.dataset.i18n = 'cta_demo_m'; if (m) m.dataset.i18n = 'desk_only_m'
    if (a.dataset.i18n === 'nav_demo') a.dataset.i18n = 'nav_demo_m'
    if (a.dataset.i18n === 'cta_demo') a.dataset.i18n = 'cta_demo_m'
    a.addEventListener('click', ev => {
      ev.preventDefault()
      const url = new URL(a.getAttribute('href'), location.href).href
      const done = () => { const tgt = t || a, key = tgt.dataset.i18n; tgt.textContent = tr('copied'); setTimeout(() => { tgt.innerHTML = tr(key) }, 2200) }
      const fallback = () => { const i = document.createElement('input'); i.value = url; document.body.appendChild(i); i.select(); try { document.execCommand('copy') } catch (e) { /* */ } i.remove(); done() }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, fallback); else fallback()
    })
  })
}
/* statische Vorschau: kein Link-Kopieren nötig */
const LAYERS = ['#stagePin', '#stagePar', '#stageGP', '#stageGP', '#stageMap', '#stageFront', '#stageFront', '.stagecut']
function drawAll() { drawHeroPin(); drawPin(); drawPar(); drawGP(); drawMap(); drawFront() }
function onScroll() {
  const vh = innerHeight
  if (MOBILE) { onScrollMobile(vh); return }
  let active = 0
  const prog = steps.map((s, i) => { const r = s.getBoundingClientRect(); const p = clamp((vh * .78 - r.top) / (r.height * .85)); if (r.top < vh * .55 && r.bottom > vh * .35) active = i; return p })
  steps.forEach((s, i) => s.classList.toggle('on', i === active))
  LAYERS.forEach(q => $(q).classList.remove('on')); $(LAYERS[active]).classList.add('on')
  $$('.tag').forEach(t => t.classList.toggle('on', active === 0))
  if (S) {
    if (par) par.forEach((o, i) => { const f = REDUCED ? 1 : ease(clamp(prog[1] * 1.5 - i / par.length * .8)); o.p.style.strokeDashoffset = o.L * (1 - f) })
    if (gp) renderGP(active === 3 ? 'choose' : 'learn', active === 3 ? prog[3] : active === 2 ? prog[2] : 1)
    if (mp) renderMap(active === 4 ? prog[4] : active > 4 ? 1 : 0)
    if (fr) {
      if (active === 6 && !pickUser) { pickVal = clamp(prog[6] * 1.25); $('#gapReq').value = Math.round(pickVal * 1000) }
      renderFront(active === 5 ? 'b' : active >= 6 ? 'c' : 'a', active === 5 ? prog[5] : 1)
    }
    $('#pickbox').classList.toggle('on', active === 6)
  }
  const cut = $('.stagecut img'), q = REDUCED ? 1 : ease(prog[7] * 1.4)
  cut.style.setProperty('--rx', (14 * (1 - q) + 4).toFixed(1) + 'deg'); cut.style.setProperty('--ry', (-22 * (1 - q) - 4).toFixed(1) + 'deg')
  $$('.tilt').forEach(f => {
    const r = f.parentElement.getBoundingClientRect()   // Lage des unbewegten Elternblocks: die eigene Drehung würde sonst zurückwirken (Flackern)
    if (!r.height || r.bottom < -vh || r.top > 2 * vh) return
    const t = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1), dir = +f.dataset.tilt || 1
    f.style.setProperty('--ry', (dir * (-6 - 8 * Math.abs(t))).toFixed(1)); f.style.setProperty('--rx', (4 * t).toFixed(1)); f.style.setProperty('--ty', (t * 28).toFixed(0) + 'px')
  })
  $('#nav').style.background = scrollY > 40 ? 'linear-gradient(#0e0e10f2, #0e0e10b0)' : ''
}
function onScrollMobile(vh) {
  const cp = CHAPS.map(c => {
    if (!c.pin) return 0
    const r = c.track.getBoundingClientRect(), run = r.height - c.card.offsetHeight, top = 72, start = vh * .5
    return clamp((start - r.top) / (start - (top - run)))
  })
  $$('.tag').forEach(t => t.classList.add('on'))
  if (S) {
    if (par) par.forEach((o, i) => { const f = REDUCED ? 1 : ease(clamp(cp[1] * 1.5 - i / par.length * .8)); o.p.style.strokeDashoffset = o.L * (1 - f) })
    if (gp) { const p = REDUCED ? 1 : cp[2]; renderGP(p < .5 ? 'learn' : 'choose', p < .5 ? p * 2 : (p - .5) * 2) }
    if (mp) renderMap(REDUCED ? 1 : cp[3])
    if (fr) {
      const p = REDUCED ? 1 : cp[4]
      if (p > .5 && !pickUser) { pickVal = clamp((p - .5) * 2 * 1.25); $('#gapReq').value = Math.round(pickVal * 1000) }
      renderFront(p < .5 ? 'b' : 'c', p < .5 ? p * 2 : 1)
      $('#pickbox').classList.toggle('on', p > .5)
    }
  }
  const cut = $('.stagecut img'), q = REDUCED ? 1 : ease(cp[5] * 1.4)
  cut.style.setProperty('--rx', (14 * (1 - q) + 4).toFixed(1) + 'deg'); cut.style.setProperty('--ry', (-22 * (1 - q) - 4).toFixed(1) + 'deg')
  $$('.tilt').forEach(f => {
    const r = f.parentElement.getBoundingClientRect()   // Lage des unbewegten Elternblocks: die eigene Drehung würde sonst zurückwirken (Flackern)
    if (!r.height || r.bottom < -vh || r.top > 2 * vh) return
    const t = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1), dir = +f.dataset.tilt || 1
    f.style.setProperty('--ry', (dir * (-6 - 8 * Math.abs(t))).toFixed(1)); f.style.setProperty('--rx', (4 * t).toFixed(1)); f.style.setProperty('--ty', (t * 28).toFixed(0) + 'px')
  })
  $('#nav').style.background = scrollY > 40 ? 'linear-gradient(#0e0e10f2, #0e0e10b0)' : ''
}
let tick = false
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; onScroll() }) } }, { passive: true })
addEventListener('resize', onScroll)

/* ---------- Ergebnisse: Balken und Punkte ---------- */
const RB = [{ k: 3, c: '#1baf7a', len: 181.83, h: 66.56, ok: 2, n: 95, ll: 494.03, min: 15 }, { k: 2, c: '#eb6834', len: 191.13, h: 66.07, ok: 30, n: 95, ll: 503.33, min: 25, freeLen: 161.25, freeH: 44.1 }, { k: 1, c: '#2a78d6', len: 196.31, h: 66.28, ok: 42, n: 96, ll: 508.51, min: 30, freeLen: 174.14, freeH: 46.9 }]
const rname = b => `${tr('bk')} ${b.k}`
function buildResults() {
  const dots = (n, ok, c, d0) => Array.from({ length: n }, (_, i) => `<i class="${i < ok ? 'f' : ''}" style="--c:${c};--d:${d0 + i * 9}ms"></i>`).join('')
  const tot = RB.reduce((s, b) => s + b.ll, 0)
  $('#stackLen').innerHTML = RB.map((b, i) => `<div style="--c:${b.c};--w:${b.ll / tot};--i:${i}"><span>${rname(b)}</span><b>${fmt(b.ll * 36 / 1000, 1)} m</b></div>`).join('')
  const mark = (v, d, sc) => v ? `<s style="--p:${v / sc}"><em>${fmt(v, d)}</em></s>` : ''
  $('#barsLen').innerHTML = RB.map((b, i) => `<div class="hb" style="--c:${b.c};--w:${b.len / 200};--i:${i}"><span>${rname(b)}</span><u><i></i>${mark(b.freeLen, 1, 200)}</u><b>${fmt(b.len, 1)}</b></div>`).join('')
  $('#barsT').innerHTML = RB.map((b, i) => `<div class="hb" style="--c:${b.c};--w:${b.min / 30};--i:${i}"><span>${rname(b)}</span><u><i></i></u><b>${b.min}</b></div>`).join('')
  $('#barsH').innerHTML = RB.map((b, i) => `<div class="vb" style="--c:${b.c};--w:${b.h / 75};--i:${i}"><u><i></i>${mark(b.freeH, 1, 75)}</u><b>${fmt(b.h, 1)}</b><span>${rname(b)}</span></div>`).join('')
  $('#dotsPins').innerHTML = RB.map((b, i) => `<div><span>${rname(b)}</span><p>${dots(36, 36, b.c, i * 300)}</p></div>`).join('')
  $('#dotsVar').innerHTML = RB.map((b, i) => `<div><span>${rname(b)}</span><p>${dots(b.n, b.ok, b.c, i * 300)}</p><b>${b.ok} / ${b.n}</b></div>`).join('')
}

/* Einblenden und Hochzählen */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .2 })
$$('.reveal').forEach(e => io.observe(e))
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return
  cio.unobserve(e.target)
  const to = +e.target.dataset.count, dec = +(e.target.dataset.dec || 0), t0 = performance.now()
  const run = now => { const f = REDUCED ? 1 : ease((now - t0) / 1400); e.target.textContent = fmt(to * f, dec); if (f < 1) requestAnimationFrame(run); else e.target.classList.add('done') }
  requestAnimationFrame(run)
}), { threshold: .6 })
$$('[data-count]').forEach(e => cio.observe(e))
buildResults()

if (S) { drawAll(); applyLang() } else applyTexts()

/* 3D-Hairpin im Hero: morpht durch echte Varianten; ohne WebGL bleibt die gezeichnete Linie */
let pinCur = null
function showPinLabel() {
  if (!pinCur) return
  $('#pinLabel').innerHTML = `${tr('pv_variant')} <b>#${pinCur.id}</b> · <b>${fmt(pinCur.len)} mm</b> · <span class="${pinCur.ok ? 'ok' : 'bad'}">${pinCur.ok ? '✓ ' + tr('pv_ok') : '✕ ' + tr('pv_bad')}</span>`
}
function heroLabelAt(sec) {                                     // Beschriftung zur Videozeit: je Variante 3,4 s, Wechsel nach 2,45 s
  const V = S && S.variants; if (!V || !V.length) return
  const c = V[Math.floor((sec + 0.95) / 3.4) % V.length]
  if (c !== pinCur) { pinCur = c; showPinLabel() }
}
function mountHero() {
  if (!heroVid) return
  heroLabelAt(0); heroVid.addEventListener('timeupdate', () => heroLabelAt(heroVid.currentTime))
  setTimeout(() => $('.hero-pin').classList.add('live'), REDUCED ? 0 : 1800)   // erst die Linie zeichnen, dann übernimmt das Video
}
const _applyTexts = applyTexts
applyTexts = function () { _applyTexts(); showPinLabel() }
addEventListener('load', mountHero)

/* ---------- Kennzahlen des Moduls Manufacturing ---------- */
function buildMfg() {
  const M = [{ k: 1, dev: 0.89, un: 9.11, co: 0.90, n: 20 }, { k: 2, dev: 1.16, un: 8.76, co: 1.14, n: 21 }, { k: 3, dev: 1.04, un: 8.70, co: 1.07, n: 20 }]
  M.reverse()
  const b = $('#mbDev'); if (!b) return
  const col = { 1: '#2a78d6', 2: '#eb6834', 3: '#1baf7a' }
  const mark = (v, sc) => `<s style="--p:${v / sc}"><em>${fmt(v, 1)}</em></s>`
  b.innerHTML = M.map((m, i) => `<div class="hb" style="--c:${col[m.k]};--w:${m.dev / 1.6};--i:${i}"><span>${tr('bk')} ${m.k}</span><u><i></i></u><b>${fmt(m.dev, 2)}</b></div>`).join('')
  $('#mbSpr').innerHTML = M.map((m, i) => `<div class="hb" style="--c:${col[m.k]};--w:${m.co / 10};--i:${i}"><span>${tr('bk')} ${m.k}</span><u><i></i>${mark(m.un, 10)}</u><b>${fmt(m.co, 1)}</b></div>`).join('')
  $('#mbDots').innerHTML = M.map((m, i) => `<div><span>${tr('bk')} ${m.k}</span><p>${Array.from({ length: m.n }, (_, q) => `<i class="f" style="--c:${col[m.k]};--d:${i * 300 + q * 9}ms"></i>`).join('')}</p></div>`).join('')
}

/* ---------- Reiter im Kopf: Suite zuerst, je Modul ein Reiter; Anker im Inhalt öffnen ihren Reiter ---------- */
const TABS = $$('.tabpanel').map(p => p.dataset.tab)
function showTab(key, target) {
  $$('.tabpanel').forEach(p => { p.hidden = p.dataset.tab !== key })
  $$('.nav .tabs a').forEach(a => { const on = a.getAttribute('href') === '#' + key; a.setAttribute('aria-selected', on); a.tabIndex = on ? 0 : -1 })
  document.body.dataset.tab = key
  if (target) target.scrollIntoView(); else scrollTo(0, 0)
  requestAnimationFrame(() => { if (S) layoutTags(); onScroll() })
}
function route() {
  const h = decodeURIComponent(location.hash.slice(1))
  if (!h || TABS.includes(h)) return showTab(h || 'suite')
  const e = document.getElementById(h), p = e && e.closest('.tabpanel')
  if (p) showTab(p.dataset.tab, e)
}
addEventListener('hashchange', route)
$('.nav .tabs').addEventListener('keydown', e => {
  const a = $$('.nav .tabs a'), i = a.findIndex(x => x.getAttribute('aria-selected') === 'true')
  const to = e.key === 'ArrowRight' ? (i + 1) % a.length : e.key === 'ArrowLeft' ? (i + a.length - 1) % a.length : -1
  if (to < 0) return
  e.preventDefault(); a[to].focus(); a[to].click()
})
route()

/* ---------- Eingebettete Suite-Vorschau: lädt erst im Sichtbereich und nur auf breiten Bildschirmen ---------- */
const embedIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting || innerWidth <= 900) return
  const f = e.target
  if (!f.getAttribute('src')) f.src = f.dataset.src
  embedIO.unobserve(f)
}), { rootMargin: '300px 0px' })
$$('.embed-frame iframe').forEach(f => embedIO.observe(f))
$('#lang').addEventListener('change', () => $$('.embed-frame iframe[src]').forEach(f => { f.src = f.dataset.src + '&l=' + lang }))

/* ---------- Scroll-Geschichten der Module 1, 3, 4: aktiver Schritt blendet sein Diagramm ein ---------- */
const MST = $$('.mstory').map(st => ({ steps: [...st.querySelectorAll('.mstep')], layers: [...st.querySelectorAll('.mlayer')] }))
function onScrollM() {
  const vh = innerHeight
  MST.forEach(m => {
    if (!m.steps[0] || !m.steps[0].offsetParent) return
    let a = 0
    m.steps.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top < vh * .55 && r.bottom > vh * .35) a = i; else if (r.bottom <= vh * .35) a = Math.max(a, i) })
    m.steps.forEach((s, i) => s.classList.toggle('on', i === a))
    m.layers.forEach((l, i) => l.classList.toggle('on', i === a))
  })
}
let tickM = false
addEventListener('scroll', () => { if (!tickM) { tickM = true; requestAnimationFrame(() => { tickM = false; onScrollM() }) } }, { passive: true })
addEventListener('resize', onScrollM)
addEventListener('hashchange', () => requestAnimationFrame(onScrollM))
onScrollM()
/* Balkenwerte der Modulseiten je Sprache formatieren (Komma im Deutschen) */
function fmtBars() { $$('b[data-v]').forEach(b => { b.textContent = fmt(+b.dataset.v, +b.dataset.d) + (b.dataset.u || '') }) }
const _applyTexts2 = applyTexts
applyTexts = function () { _applyTexts2(); fmtBars() }
fmtBars()
/* Handy: aktiven Reiter in die Reiterzeile schieben; Wisch-Hinweis am Ende ausblenden */
const tabBar = $('.nav .tabs')
function tabIntoView() {
  const a = tabBar.querySelector('[aria-selected="true"]')
  if (a && tabBar.scrollWidth > tabBar.clientWidth) tabBar.scrollLeft = a.offsetLeft - (tabBar.clientWidth - a.offsetWidth) / 2
  tabBar.classList.toggle('end', tabBar.scrollLeft + tabBar.clientWidth >= tabBar.scrollWidth - 4)
}
tabBar.addEventListener('scroll', () => tabBar.classList.toggle('end', tabBar.scrollLeft + tabBar.clientWidth >= tabBar.scrollWidth - 4), { passive: true })
addEventListener('hashchange', () => requestAnimationFrame(tabIntoView))
tabIntoView()
